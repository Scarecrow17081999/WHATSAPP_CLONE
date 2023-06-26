import React, { useContext, useEffect } from "react";
import { getUserClient } from "../../service/API";
import Conversation from "./Conversation";
import styled from "@emotion/styled";
import { AuthContext } from "../../contexts/AuthContextProvider";

const Component = styled.div`
  height: 81vh;
  overflow: overlay;
`;
const Conversations = ({ text }) => {
  const [users, setUsers] = React.useState([]);

  const { account, socket, setActiveUsers } = useContext(AuthContext);
  const fetchUsers = async () => {
    const users = await getUserClient();
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUser", account);

    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);
  return (
    <Component>
      {users?.map(
        (user) =>
          account.sub != user.sub && <Conversation user={user} key={user._id} />
      )}
    </Component>
  );
};

export default Conversations;
