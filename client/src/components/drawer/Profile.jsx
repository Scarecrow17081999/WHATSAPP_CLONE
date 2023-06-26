import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";
import styled from "@emotion/styled";

const ImageContainer = styled(Box)``;

const Image = styled("img")({
  width: 150,
  //   height: 200,
  borderRadius: "50%",
  padding: "25px 0px",
  display: "block",
  margin: "auto",
});

const BoxWrapper = styled(Box)`
  background: #ffffff;
  padding: 12px 30px 2px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08);

  & > :first-of-type {
    font-size: 13px;
    color: #009688;
    font-weight: 200;
  }
  & > :last-child {
    margin: 14px 0;
    color: #4a4a4a;
    font-weight: 200;
  }
`;
const About = styled(Box)`
  background: #ffffff;
  padding: 12px 30px 2px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08);

  & > :first-of-type {
    font-size: 13px;
    color: #009688;
    font-weight: 200;
  }
  & > :last-child {
    margin: 14px 0;
    color: #4a4a4a;
    font-weight: 200;
  }
`;
const Description = styled(Box)`
  padding: 15px 20px 28px 30px;
  & > p {
    font-size: 13px;
    color: #8696a0;
  }
`;
const Profile = () => {
  const { account, setAccount } = useContext(AuthContext);
  return (
    <>
      <ImageContainer>
        <Image src={account.picture} alt="" />
      </ImageContainer>
      <BoxWrapper>
        <Typography>Your Name</Typography>
        <Typography>{account.name}</Typography>
      </BoxWrapper>
      <Description>
        <Typography>
          This is not your username or pin . This name will be visible to your
          WhatsApp contacts
        </Typography>
      </Description>
      <About>
        <Typography>About</Typography>
        <Typography>
          This is not your username or pin . This name will be visible to your
          WhatsApp contacts
        </Typography>
      </About>
    </>
  );
};

export default Profile;
