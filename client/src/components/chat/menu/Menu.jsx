import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";

const Menu = () => {
  const [text, setText] = React.useState("");
  return (
    <Box>
      <Header />
      <Search setText={setText} />
      <Conversations text={text} />
    </Box>
  );
};

export default Menu;
