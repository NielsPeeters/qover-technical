import React from "react";
import styled from "styled-components";
import carbg from "../assets/images/carbg.png";
import CarContainer from "../components/car/CarContainer";
import Flex from "../components/Flex";

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  background-position: center;
  background-image: url("${carbg}"),
    linear-gradient(
      122deg,
      rgba(49, 123, 218, 0.8) -6%,
      rgba(51, 195, 200, 0.8)
    );
`;

const Car = () => {
  return (
    <Background>
      <Flex justify="center" align="center">
        <CarContainer></CarContainer>
      </Flex>
    </Background>
  );
};

export default Car;
