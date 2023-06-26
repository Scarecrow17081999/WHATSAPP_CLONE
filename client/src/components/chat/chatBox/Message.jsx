import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { formatDate, downloadMedia } from "../../utils/commonUtils";
import { AuthContext } from "../../contexts/AuthContextProvider";
import GetAppIcon from "@mui/icons-material/GetApp";
import { pdfIcon } from "../../constants/data";

const Own = styled(Box)`
  background-color: #dcf8c6;
  padding: 6px;
  max-width: 60%;
  margin: 0.5rem 0.5rem 0.5rem auto;

  width: fit-content;
  display: flex;
  border-radius: 8px;
  word-break: break-word;
`;
const Wrapper = styled(Box)`
  background-color: #ffffff;
  padding: 6px;
  max-width: 60%;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
  margin: 0.5rem auto 0.5rem 0.5rem;
`;

const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 0px;
`;
const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  word-break: keep-all;
  margin-top: auto;
`;
const Message = ({ message }) => {
  const { account } = useContext(AuthContext);

  return (
    <>
      {account.sub == message.senderId ? (
        <Own>
          {message.type === "text" ? (
            <TextMessage message={message} />
          ) : (
            <ImageMessage message={message} />
          )}
        </Own>
      ) : (
        <Wrapper>
          {message.type === "text" ? (
            <TextMessage message={message} />
          ) : (
            <ImageMessage message={message} />
          )}
        </Wrapper>
      )}
    </>
  );
};

function TextMessage({ message }) {
  return (
    <>
      <Text>{message.text}</Text>
      <Time>{formatDate(message.createdAt)}</Time>
    </>
  );
}
function ImageMessage({ message }) {
  return (
    <>
      <Box style={{ position: "relative" }}>
        {message?.text?.includes("pdf") ? (
          <Box style={{ display: "flex" }}>
            <img style={{ width: "10%" }} src={pdfIcon} alt="" />
            <Typography
              style={{
                marginTop: "0.3rem",
                marginLeft: "0.5rem",
                fontSize: "14px",
              }}
            >
              {message.text.split("/").pop()}
            </Typography>
          </Box>
        ) : (
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={message.text}
            alt={message.text}
          />
        )}

        <Time style={{ position: "absolute", bottom: 0, right: 3 }}>
          <GetAppIcon
            onClick={(e) => downloadMedia(e, message.text)}
            style={{
              marginRight: 10,
              border: "1px solid grey",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
          {formatDate(message.createdAt)}
        </Time>
      </Box>
    </>
  );
}
export default Message;
