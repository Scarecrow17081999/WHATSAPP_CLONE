import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { Box, styled } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";
const Container = styled(Box)`
  height: 54px;
  background-color: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Image = styled("img")({
  width: 40,
  height: 40,
  borderRadius: "50%",
  cursor: "pointer",
});

const IconWrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 15px;
    color: black;
    cursor: pointer;
  }
  & > :first-of-type {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 4px;
  }
`;
const Header = () => {
  const { account } = useContext(AuthContext);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <Container>
        <Image onClick={toggleDrawer} src={account.picture} alt="dp" />
        <IconWrapper>
          <DonutLargeIcon />
          <ChatIcon />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </IconWrapper>
      </Container>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default Header;
