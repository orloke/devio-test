import styled from 'styled-components';

export const Card = styled.div`
  width: 200px;
  height: 250px;
  background-color: red;
  position: relative;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 10px;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.2);
  div {
    position: absolute;
    border-radius: 20px 20px 10px 10px;
    width: 100%;
    height: 70%;
    background-color: blue;
  }
`;
