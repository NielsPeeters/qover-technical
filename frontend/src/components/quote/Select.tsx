import React, { FC, useState } from "react";
import styled from "styled-components";
import Flex from "../Flex";
import { ReactComponent as Valid}  from '../../assets/images/valid.svg'

const Container = styled.label`
  width: 323px;
  margin: 40px 7px 0 7px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const Content = styled.span<{ selected: boolean }>`
  display: inline-flex;
  flex-direction: column;
  width: 323px;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.5);
  background-color: ${(props) => (props.selected ? "#31cfda" : "#fff")};
`;

const Title = styled.h2<{ selected: boolean }>`
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${(props) => (props.selected ? "#ffffff" : "#484848")};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 0;
  margin: 0;
`;

const Price = styled.div<{ selected: boolean }>`
  height: 95px;
  background-color: ${(props) =>
    props.selected ? "rgba(255, 255, 255, 0.15)" : "rgba(49, 207, 218, 0.05)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
  border-top: 1px solid #5b728919;
  border-bottom: 1px solid #5b728919;

  .price {
    font-family: Roboto;
    font-size: 38px;
    font-weight: bold;
    text-align: center;
    color: ${(props) => (props.selected ? "rgba(255, 255, 255)" : "#31cfda")};
  }

  .symbol {
    margin-left: 5px;
    margin-top: 5px;
    font-size: 16px;
    text-align: center;
    align-items: flex-start;
    display: inline-flex;
    color: ${(props) => (props.selected ? "rgba(255, 255, 255)" : "#31cfda")};
  }

  .subText {
    font-family: Roboto;
    font-size: 11px;
    letter-spacing: 1px;
    text-align: center;
    color: ${(props) => (props.selected ? "rgba(255, 255, 255)" : "#31cfda")};
  }
`;

const DetailContainer = styled.div<{selected: boolean}>`
  padding: 15px;
  color: ${(props) => (props.selected ? "rgba(255, 255, 255)" : "#484848")};

  justify-content: center;
  border-bottom: 1px solid #5b728919;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  text-align: center;


  .bold{
    font-weight: bold;
  }
`;

const ButtonContainer = styled.div<{selected: boolean}>`
  padding: 10px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100%;
    border-radius: 5px;
    border: solid 1px #31cfda;
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: ${(props) => (props.selected ? "#31cfda" : "rgba(255, 255, 255)")};
    background-color: ${(props) => (props.selected ? "rgba(255, 255, 255)" : "#31cfda")};
  }
`;

const ValidIcon = styled(Valid)`
  margin-right: 10px;
`;

const Select: FC<{ plans: any[]; isYearly: boolean }> = ({
  plans,
  isYearly,
}: {
  plans: any[];
  isYearly: boolean;
}) => {
  const [selected, setSelected] = useState(null);
  return (
    <Flex width="initial" height="initial">
      {plans.map((plan) => (
        <Container>
          <input
            type="radio"
            name={plan.groupName}
            value={plan.name}
            onChange={(e: any) => setSelected(e.target.value)}
          />
          <Content selected={selected === plan.name}>
            <Title selected={selected === plan.name}>{plan.title}</Title>
            <Price selected={selected === plan.name}>
              <Flex align="start" justify="center">
                <span className="price">
                  {isYearly ? (Math.round(plan.price.yearly * 100)/100).toLocaleString('nl-BE') : (Math.round(plan.price.monthly * 100)/100).toLocaleString('nl-BE')}
                </span>
                <span className="symbol">&euro;</span>
              </Flex>
              <span className="subText">{isYearly? 'YEARLY' : 'MONTHLY'} INCL. taxes</span>
            </Price>

            <DetailContainer selected={selected === plan.name}><span className="bold">Maximum duration travel</span> of <span className="bold">{plan.features.maxDuration} days</span></DetailContainer>
            <DetailContainer selected={selected === plan.name}><span className="bold">Medical expenses reimbursement</span> up to <span className="bold">{plan.features.medicalReimbursement} €</span></DetailContainer>
            <DetailContainer selected={selected === plan.name}><span className="bold">Personal assistance abroad</span> up to <span className="bold">{plan.features.personalAssistance} €</span></DetailContainer>
            <DetailContainer selected={selected === plan.name}><span className="bold">Travel assistance abroad</span> up to  <span className="bold">{plan.features.travelInsurance} €</span><br/> per insured per travel</DetailContainer>
            <DetailContainer selected={selected === plan.name}><span className="bold">Coverage duration: {plan.features.coverageDuration} year</span></DetailContainer>

            <ButtonContainer selected={selected === plan.name}>
              <button onClick={(e: any) => setSelected(plan.name)}>{selected === plan.name ? (<><ValidIcon/>Plan selected</>) : 'Choose this plan'}</button>
            </ButtonContainer>
          </Content>
        </Container>
      ))}
    </Flex>
  );
};

export default Select;
