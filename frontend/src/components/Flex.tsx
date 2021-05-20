import styled from 'styled-components';

const Flex = styled.div<{justify?: string, align?: string, grow?:string, direction?: 'row' | 'column', width?: string,  height?: string}>`
  display: flex;
  flex-direction: ${(props: any)=> props.direction || 'row'};
  flex-grow: ${(props: any)=> props.grow || 'initial'};;
  width: ${(props: any)=> props.width || '100%'};
  height: ${(props: any)=> props.height || '100%'};
  justify-content: ${(props: any)=> props.justify || 'initial'};
  align-items: ${(props: any)=> props.align || 'initial'};
  align-content: ${(props: any)=> props.align || 'initial'};
`;

export default Flex;
