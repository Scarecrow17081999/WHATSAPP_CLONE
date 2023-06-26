import React, { useContext } from "react";
import LoginDialogue from "./account/LoginDialogue";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import ChatDialogue from "./chat/ChatDialogue";
import { AuthContext } from "./contexts/AuthContextProvider";
// import MenuIcon from "@mui/icons-material/Menu";
const Section = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;
const Header = styled(AppBar)`
  height: 125px;
  background-color: #00bfa5;
  box-shadow: none;
  z-index: 0;
`;
const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
  z-index: 0;
`;

const Messenger = () => {
  const { account, setAccount } = useContext(AuthContext);

  return (
    <Section>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialogue />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialogue />
        </>
      )}
    </Section>
  );
};

export default Messenger;
