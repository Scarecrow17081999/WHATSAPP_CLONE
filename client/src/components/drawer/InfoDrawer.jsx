import { Box, Drawer, Typography, styled } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Profile from "./Profile";
const drawerStyle = {
  left: 36,
  top: 20,
  boxShadow: "none",
  height: "95%",
  width: "450px",
};

const Header = styled(Box)`
  background: #008069;
  height: 105px;
  display: flex;
  align-items: center;
  box-sizing: content-box;
  padding: 15px;
  & > svg,
  & > p {
    margin-top: auto;
    margin-right: 1rem;
    color: white;
    font-weight: bold;
  }
`;
const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;
const InfoDrawer = ({ open, setOpen }) => {
  const toggleDrawer = () => {
    setOpen(false);
  };
  return (
    <>
      <Drawer
        open={open}
        onClose={toggleDrawer}
        PaperProps={{ sx: drawerStyle }}
        style={{ zIndex: 1500 }}
        hideBackdrop
      >
        <Header>
          <ArrowBackIcon
            sx={{ cursor: "pointer" }}
            onClick={() => setOpen(false)}
          />
          <Typography sx={{ fontSize: "15px" }}>Profile</Typography>
        </Header>
        <Component>
          <Profile></Profile>
        </Component>
      </Drawer>
    </>
  );
};

export default InfoDrawer;
