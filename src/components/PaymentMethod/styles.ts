import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid gray;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  .paymentName {
    display: flex;
    align-items: center;
    h6 {
      margin: 0;
      margin-left: 1rem;
    }
  }
`;

export const Checkbox = styled.div`
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
