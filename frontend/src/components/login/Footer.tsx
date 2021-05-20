import React from "react";
import styled from "styled-components";
import Flex from "../Flex";

const Container = styled.div`
  border-top: solid 1px rgb(255, 255, 255, 0.2);
  padding: 16px;
  color: white;
  font-family: Roboto;
  font-size: 12px;
  line-height: 1.42;
  margin-top: 100px;
`;

const Footer = () => {
  return (
    <Container>
      <Flex justify="center">&copy; Qover 2017</Flex>
    </Container>
  );
};

export default Footer;
