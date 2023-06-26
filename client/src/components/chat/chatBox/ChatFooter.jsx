import { Box, styled, InputBase } from "@mui/material";
import React, { useEffect } from "react";

import {
  EmojiEmotionsOutlined,
  AttachFileOutlined,
  Mic,
} from "@mui/icons-material";
import { uploadFile } from "../../service/API";

const Footer = styled(Box)`
  height: 65px;
  background-color: #ededed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const SearchBox = styled(Box)`
  background-color: #ffffff;
  border-radius: 10px;
  width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  height:20px
  padding:200px;
  font-size: 14px;
  padding-left: 10px;

`;
const ChatFooter = ({ sentText, setValue, value, setFile, file, setImage }) => {
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  };

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setImage(response);
      }
    };
    file && getImage();
  }, [file]);
  return (
    <Footer>
      <EmojiEmotionsOutlined />
      <label htmlFor="fileInput">
        <AttachFileOutlined />
      </label>
      <input
        id="fileInput"
        type="file"
        style={{ display: "none" }}
        onChange={(e) => onFileChange(e)}
      />
      <SearchBox>
        <InputField
          value={value}
          onKeyUp={(e) => sentText(e)}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type your message here"
        />
      </SearchBox>
      <Mic />
    </Footer>
  );
};

export default ChatFooter;
