import React from "react";
import styled from "styled-components";
import Container from "../Container";
import {ReactComponent as ArrowLeft} from '../../assets/images/arrowLeft.svg'

const Background = styled.div`
  padding: 10px 0px;
  margin-bottom: 60px;
  background-color: rgba(255, 255, 255, 0.12);
`;

const ArrowLeftIcon = styled(ArrowLeft)`
  width: 9px;
  height: 9px;
`;

const StyledLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  font-family: Roboto;
  font-size: 9px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.75px;
  color:white;
  display: flex;
  align-items: center;


  :visited {
    color: white;
  }
`;


const TopNav = () => {
  return (
    <Background>
      <Container justify="start">
        <StyledLink href="http://qover.me">
          <ArrowLeftIcon /> Qover.me
        </StyledLink>
      </Container>
    </Background>
  );
};

export default TopNav;
