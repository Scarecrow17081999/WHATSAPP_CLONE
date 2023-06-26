import React, { useEffect, useRef } from "react";
import { io } from "socket.io-client";
export const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
  const [account, setAccount] = React.useState(null);
  const [person, setPerson] = React.useState(null);
  const [activeUsers, setActiveUsers] = React.useState(null);
  const [sendMessageFlag, setSendMessageFlag] = React.useState(false);
  const socket = useRef({});
  useEffect(() => {
    socket.current = io("ws://localhost:3000");
  }, []);
  return (
    <AuthContext.Provider
      value={{
        account,
        setAccount,

        person,
        setPerson,
        socket,
        setActiveUsers,
        activeUsers,
        sendMessageFlag,
        setSendMessageFlag,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
