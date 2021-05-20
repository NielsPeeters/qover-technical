import styled from 'styled-components';

const Container = styled.nav<{justify?: string}>`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: ${(props: any)=> props.justify || 'center'};
  padding-left: 1rem;
  padding-right: 1rem;
	min-width: 100%;
  box-sizing: border-box;

  @media only screen and (min-width: 640px) {
    padding-left: 2rem;
    padding-right: 2rem;
    min-width: 640px;
  }
  @media only screen and (min-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
    min-width: 768px;
  }
  @media only screen and (min-width: 1024px) {
    padding-left: 4rem;
    padding-right: 4rem;
    min-width: 1024px;
  }
  @media only screen and (min-width: 1280px) {
    padding-left: 5rem;
    padding-right: 5rem;
    min-width: 1280px;
  }
  @media only screen and (min-width: 1536px) {
    padding-left: 6rem;
    padding-right: 6rem;
    min-width: 1536px;
  }
`;

export default Container;
