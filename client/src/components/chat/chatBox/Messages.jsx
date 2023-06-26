import { Box, styled } from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import { whatsAppChatBackground } from "../../constants/data";
import ChatFooter from "./ChatFooter.jsx";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { newMessage, getMessage } from "../../service/API";
import Message from "./Message";

const Wrapper = styled(Box)`
  //   position: relative;
  background-image: url(${whatsAppChatBackground});
  background-size: 50%;
`;
const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;
const Messages = ({ person, conversation }) => {
  const { account, socket, sendMessageFlag, setSendMessageFlag } =
    useContext(AuthContext);
  const [value, setValue] = React.useState("");
  const [messages, setMessages] = React.useState("");

  const [file, setFile] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [incomingMessage, setIncomingMessage] = React.useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({ ...data, createdAt: Date.now() });
    });
  }, []);

  useEffect(() => {
    const getMessageDetails = async () => {
      const data = await getMessage(conversation?.conv?._id);
      setMessages(data);
    };
    conversation?.conv?._id && getMessageDetails();
  }, [person, conversation, sendMessageFlag]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    incomingMessage &&
      conversation?.conv?.members?.includes(incomingMessage.senderId) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);
  const sentText = async (e) => {
    let code = e.keyCode || e.which;
    if (code === 13) {
      let message = {};
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation.conv._id,
          type: "text",
          text: value,
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation.conv._id,
          type: "image",
          text: image,
        };
      }

      socket.current.emit("sendMessage", message);
      await newMessage(message);
      setValue("");
      setFile(null);
      setImage(null);
      setSendMessageFlag((prev) => !prev);
    }
  };
  return (
    <Wrapper>
      <Component>
        {messages &&
          messages.map((message) => {
            return (
              <Box key={message._id} ref={scrollRef}>
                <Message message={message} />
              </Box>
            );
          })}
      </Component>
      <ChatFooter
        sentText={sentText}
        setValue={setValue}
        value={value}
        setFile={setFile}
        file={file}
        setImage={setImage}
      />
    </Wrapper>
  );
};

export default Messages;
