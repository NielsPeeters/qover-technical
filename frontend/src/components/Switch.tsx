import React from "react";
import styled from "styled-components";

const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 30px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  :before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + & {
    background-color: rgba(255, 255, 255, 0.2);
  }

  input:focus + & {
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.2);
  }

  input:checked + &:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
`;

const Switch = ({onChange}: {onChange: (e: any)=> void}) => {
  return <SwitchContainer>
    <input type="checkbox" onChange={onChange}></input>
    <Slider></Slider>
  </SwitchContainer>;
};

export default Switch;
