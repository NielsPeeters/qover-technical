import React, { useState } from "react";
import styled from "styled-components";
import quotebg from "../assets/images/quotebg.svg";
import Flex from "../components/Flex";
import Select from "../components/quote/Select";
import Switch from "../components/Switch";
import { ReactComponent as TableIcon } from "../assets/images/icon-comparison.svg";
import {useCalculate} from "../hooks/calculate";

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  object-fit: contain;
  background-position: top;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("${quotebg}"),
    linear-gradient(170deg, #317bda, #317bda clamp(400px,50%, 60%), #f6f6f6 clamp(300px,50%, 60%));
`;

const Title = styled.h1`
  margin: 0 48px 40px;
  font-family: Roboto;
  font-size: 26px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  min-width: max-content;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const MontYear = styled.p<{ bold?: boolean }>`
  font-family: Roboto;
  font-size: 13px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  letter-spacing: 1.08px;
  text-align: right;
  color: #ffffff;
  margin-left: 10px;
  margin-right: 10px;
  text-transform: uppercase;
`;

const FullComparison = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #31cfda;

  svg {
    margin-left: 10px;
  }
`;

const Quote = () => {
  const [yearly, setYearly] = useState(false);
  const {plans} = useCalculate();

  return (
    <Background>
      <Title>Select a plan</Title>
      <Flex
        align="center"
        justify="center"
        width="max-content"
        height="initial"
      >
        <MontYear bold={!yearly}>Pay Monthly</MontYear>
        <Switch onChange={(e) => setYearly(e.target.checked)}></Switch>
        <MontYear bold={yearly}>Pay Yearly</MontYear>
      </Flex>

      <Select isYearly={yearly} plans={plans} />

      <FullComparison href="# ">
        Show me the full comparison table
        <TableIcon />
      </FullComparison>

    </Background>
  );
};

export default Quote;
