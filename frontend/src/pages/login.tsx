import React from 'react'
import Flex from '../components/Flex';
import TopNav from '../components/login/TopNav';
import {ReactComponent as Logo} from '../assets/images/logo.svg'
import styled from 'styled-components';
import LoginContainer from '../components/login/LoginContainer';
import Footer from '../components/login/Footer';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: linear-gradient(122deg, #317bda -6%, #33c3c8);
`;

const LogoIcon = styled(Logo)`
  margin-bottom: 30px;
`;

const DontHaveAccount = styled.button`
  width: 350px;
  padding: 15px 63.5px 14px 64.5px;
  border-radius: 3px;
  border: solid 1px #ffffff;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  background-color: transparent;
  margin-top: 20px;
  cursor: pointer;
  min-width: max-content;

  span {
    text-decoration: underline;
  }
`;

const Login = () => {

  return (
    <Background>
        <TopNav/>
        <Flex align="center" justify="center" direction="column" grow="1">
          <LogoIcon/>
          <LoginContainer/>
          <DontHaveAccount>Don’t have an account? <span>Ask access</span></DontHaveAccount>
        </Flex>
        <Footer/>
    </Background>
  )
}

export default Login;
