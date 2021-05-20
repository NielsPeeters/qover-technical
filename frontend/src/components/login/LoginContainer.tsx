import React from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import {ReactComponent as RememberMe} from '../../assets/images/rememberMeCheck.svg';
import { Login, useAuth } from "../../hooks/auth";
import Flex from "../Flex";
import { useForm } from "react-hook-form";

const Container = styled.form`
  width: 350px;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0 2px 2px 0 #d4dce2;
  background-color: #ffffff;
  color: #5b7289;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  margin-top: 10px;
  padding-bottom: 5px;
  color: #5b7289;
  border-bottom: 2px solid #317bda;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-family: Roboto;
  font-size: 10px;
  color: #5b7289;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-size: 18px;
  font-weight: normal;
  line-height: 1.56;
  text-align: center;
  padding: 0;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 20px;
  `;

const RememberMeIcon = styled(RememberMe)`
  width: 16px;
  height: 16px;
  margin-right: 7px;
  cursor: pointer;
`;

const RememberMeText = styled.p`
  padding: 0px;
  margin: 0px;
  font-family: Roboto;
  font-size: 12px;
  cursor: pointer;
`;

const ForgotPassword = styled.p`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  text-align: right;
  color: #317bda;
  padding: 0px;
  margin: 0px;
  font-family: Roboto;
  font-size: 12px;
  min-width: max-content;
  cursor: pointer;
`;

const SingInButton = styled.button`
  padding: 15px 82.5px 14px;
  width: 100%;
  border: none;
  border-radius: 3px;
  background-color: #317bda;
  color: white;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  margin-top: 35px;
  cursor: pointer;
  :hover {
    background-color: #255ea8;
  }
`;

const AdaptedFlex = styled(Flex)`
  height: inherit;
`;

const LoginContainer = () => {
  const {user, signin} = useAuth();
  const { register, handleSubmit } = useForm();

  if (user) {
    return <Redirect to="/car"></Redirect>
  }

  const onSubmit = (data: Login) => signin(data);

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Title>Welcome at Qover</Title>
      <Label htmlFor="userName">
        Email
        <Input id="userName" type="text" {...register("userName")}></Input>
      </Label>

      <Label htmlFor="password">
        Password
        <Input id="password" type="password" {...register("password")}></Input>
      </Label>

      <AdaptedFlex justify="space-between" align="center">
        <AdaptedFlex align="center">
          <RememberMeIcon/>
          <RememberMeText>Remember me</RememberMeText>
        </AdaptedFlex>
        <ForgotPassword>Forgot your password?</ForgotPassword>
      </AdaptedFlex>

      <SingInButton type="submit">Sign in to your account</SingInButton>
    </Container>
  );
};

export default LoginContainer;
