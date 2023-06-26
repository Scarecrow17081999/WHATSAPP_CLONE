import { Box } from "@mui/material";
import React from "react";
import InputBase from "@mui/material/InputBase";
import { Search as SearchIcon } from "@mui/icons-material";
import styled from "@emotion/styled";

const Component = styled(Box)`
  background: #ffff;
  height: 45px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
`;
const Wrapper = styled(Box)`
  background-color: #f0f2f5;
  position: relative;
  margin: 0px 13px;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 10px;
`;

const Icon = styled(Box)`
  position: absolute;
  height: 100%;
  padding: 4px 4px 4px 8px;
  color: #919191;
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 16px;
  height: 15px;
  padding-left: 65px;
  font-size: 15px;
`;
const Search = ({ setText }) => {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchIcon />
        </Icon>
        <InputField
          onChange={(e) => setText(e.target.value)}
          placeholder={"Search or start a new chat"}
        />
      </Wrapper>
    </Component>
  );
};

export default Search;
