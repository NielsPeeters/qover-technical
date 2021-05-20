import React, { FC, useState } from 'react'
import styled from 'styled-components';
import { ReactComponent as DropdownIcon } from '../../assets/images/icon-dropdown.svg'

const Field = styled.div`
  width: 324px;
  height: 40px;
  position: relative;
  margin: 0;
  padding: 11px 15px 11px 0;
  border-radius: 2px;
  border: solid 1px rgba(72, 72, 72, 0.2);
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  color: #484848;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 324px;
  position: absolute;
  top: calc(100% + 5px);
  left: -1px;
  border-radius: 2px;
  overflow: hidden;
  `;

const Item = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: white;
  border: solid 1px rgba(72, 72, 72, 0.2);
  padding: 10px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;

`;

const Dropdown: FC<{items: any[], item: {name:string}, setItem: any }> = ({items = [], item, setItem}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <Field onClick={() => setDropdownOpen(!dropdownOpen)}>
      {item.name}
      <DropdownIcon/>
      {
        dropdownOpen && <Container>
          {items.map((itemRes:any) => <Item key={itemRes.name} onClick={() => setItem(itemRes)}>{itemRes.name}</Item>)}
        </Container>
      }
    </Field>
  )
}

export default Dropdown
