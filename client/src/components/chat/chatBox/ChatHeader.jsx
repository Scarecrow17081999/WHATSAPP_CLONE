import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";

import {
  Search as SearchIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";
import styled from "@emotion/styled";
import { AuthContext } from "../../contexts/AuthContextProvider";

const Header = styled(Box)`
  display: flex;
  //   justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  height: 54px;
  background-color: #ededed;
`;

const Image = styled.img`
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
`;
const Name = styled(Typography)`
  margin-left: 12px !important;
`;
const Status = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;

const RightIconContainer = styled(Box)`
  margin-left: auto;
  & > svg {
    padding: 0px;
    margin-left: 15px;
    font-size: 24px;
    color: #000;
  }
`;
const ChatHeader = ({ person }) => {
  const { activeUsers } = useContext(AuthContext);

  return (
    <Header>
      <Image src={person ? person.picture : "picture"} alt="dp" />
      <Box>
        <Name>{person ? person.name : "name"}</Name>
        <Status>
          {activeUsers?.find((user) => person.sub == user.sub)
            ? "Online"
            : "Offline"}
        </Status>
      </Box>
      <RightIconContainer>
        <SearchIcon />
        <MoreVertIcon />
      </RightIconContainer>
    </Header>
  );
};

export default ChatHeader;
