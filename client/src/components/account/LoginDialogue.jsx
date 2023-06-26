import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import React, { useContext } from "react";
import { qrCodeImage } from "../constants/data";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { AuthContext } from "../contexts/AuthContextProvider";
import { addUserClient } from "../service/API";
const dialogStyle = {
  width: "60%",
  maxWidth: "100%",
  height: "96%",
  maxHeight: "100%",
  margin: "auto",
  marginTop: "10%",
  boxShadow: "none",
  overflow: "none",
};

const Component = styled(Box)`
  display: flex;
  padding: 5rem;
`;
const Container = styled(Box)`
  //   padding: 6px 0px 56px 0px;
`;
const QrCode = styled("img")({
  height: "264px",
  width: "264px",
  margin: "0px 0 0 16px",
});

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 100;
  margin-bottom: 26px;
`;
const StyledList = styled(List)`
  & > li {
    padding: 0;
    font-size: 16px;
    line-height: 28px;
    margin-top: 16px;
    color: #4a4a4a;
  }
`;

const LoginDialogue = () => {
  const { account, setAccount } = useContext(AuthContext);

  const onLoginSuccess = async (res) => {
    const { credential } = res;
    const user_data = jwt_decode(credential);
    setAccount(user_data);
    await addUserClient(user_data);
  };
  const onLoginFailure = (res) => {
    console.log("Login Failure", res);
  };
  return (
    <Dialog hideBackdrop PaperProps={{ sx: dialogStyle }} open={true}>
      <Component>
        <Container>
          <Title>To use Whatsapp on your Computer</Title>
          <StyledList>
            <ListItem>1.Open WhatsApp on your Computer</ListItem>
            <ListItem>2.Tap Menu setting to select WhatsApp web</ListItem>
            <ListItem>
              3.Point your phone to this screen and capture the code
            </ListItem>
          </StyledList>
        </Container>
        <Box sx={{ position: "relative" }}>
          <QrCode src={qrCodeImage} alt="QR CODE" />

          <Box sx={{ position: "absolute", top: "40%", left: "20%" }}>
            <GoogleLogin
              useOneTap
              onSuccess={onLoginSuccess}
              onError={onLoginFailure}
              ux_mode="popup"
            />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialogue;
