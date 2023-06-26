import { Box, Divider, Typography, styled } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { getConversation, setConversation } from "../../service/API";
import { formatDate } from "../../utils/commonUtils";

const Component = styled(Box)`
  display: flex;
  height: 65px;
  cursor: pointer;
  // align-items: center;
  padding: 13px 0;
`;

const Image = styled("img")({
  width: 70,
  borderRadius: "50%",
  padding: "0px 14px",
});
const StyledDivider = styled(Divider)`
  margin: 0 0 0 40px;
  background-color: #e9edef;
  opacity: 0.6;
`;
const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`;
const Time = styled(Typography)`
  font-size: 12px;
  margin-left: auto;
  color: #00000099;
  margin-right: 10px;
`;
const Text = styled(Typography)`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.9);
`;
const Conversation = ({ user }) => {
  const { setPerson, account, sendMessageFlag } = useContext(AuthContext);
  const [message, setMessage] = React.useState(null);

  const getUser = async (user) => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };

  useEffect(() => {
    const getConversationDetails = async () => {
      const { data } = await getConversation({
        senderId: account.sub,
        receiverId: user.sub,
      });
      setMessage({ text: data.conv?.message, timestamp: data.conv?.updatedAt });
    };
    getConversationDetails();
  }, [sendMessageFlag]);
  return (
    <>
      <Component onClick={() => getUser(user)}>
        <Box>
          <Image src={user.picture} alt="" />
        </Box>
        <Box>{user.name}</Box>
        <Box style={{ overflow: "hidden" }}>
          <Text>
            {message?.text?.includes("localhost") ? "media" : message?.text[0]}
          </Text>
        </Box>
        <Box style={{ width: "40px" }}>
          <Container>
            {message?.text && <Time>{formatDate(message?.timestamp)}</Time>}
          </Container>
        </Box>
      </Component>
      <StyledDivider />
    </>
  );
};

export default Conversation;
