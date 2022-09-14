import styled from 'styled-components';

interface props {
  checked: boolean;
}

export const DivCheckbox = styled.div<props>`
  width: 20px;
  height: 20px;
  background-color: white;
  border: 2px solid green;
  border-radius: 100%;
  display: flex;
  cursor: pointer;
  .active {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: green;
    display: ${props => (props.checked ? 'block' : 'none')};
    margin: auto;
  }
`;
