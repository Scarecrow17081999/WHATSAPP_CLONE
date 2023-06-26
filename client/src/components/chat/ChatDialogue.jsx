import { Box, Dialog, styled } from "@mui/material";
import React, { useContext } from "react";
import Menu from "./menu/Menu";
import EmptyChat from "./chatBox/EmptyChat";
import ChatBox from "./chatBox/ChatBox";
import { AuthContext } from "../contexts/AuthContextProvider";
const dialogStyle = {
  width: "95%",
  maxWidth: "100%",
  height: "95%",
  maxHeight: "100%",
  margin: "20px",
  boxShadow: "none",
  overflow: "none",
  borderRadius: "0",
};

const Container = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  min-width: 450px;
`;

const RightComponent = styled(Box)`
  width: 73%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const ChatDialogue = () => {
  const { person } = useContext(AuthContext);
  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop
      maxWidth={"md"}
    >
      <Container>
        <LeftComponent>
          <Menu />
        </LeftComponent>
        <RightComponent>{person ? <ChatBox /> : <EmptyChat />}</RightComponent>
      </Container>
    </Dialog>
  );
};

export default ChatDialogue;
