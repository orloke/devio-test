import styled from 'styled-components';

export const Container = styled.div`
  input {
    display: none;
  }
  input:checked + div {
    background-color: green;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: auto;
  }
  label {
    width: 20px;
    height: 20px;
    border: 2px solid green;
    display: flex;
    border-radius: 50%;
    cursor: pointer;
  }
`;
