import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import ChatFooter from "./ChatFooter";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { getConversation } from "../../service/API";

const ChatBox = () => {
  const { person, account } = useContext(AuthContext);
  const [conversation, setConversation] = React.useState([]);

  useEffect(() => {
    const getConversationDetails = async () => {
      const { data } = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      setConversation(data);
    };
    getConversationDetails();
  }, [person]);
  return (
    <Box>
      <ChatHeader person={person} />
      <Messages person={person} conversation={conversation} />
    </Box>
  );
};

export default ChatBox;
