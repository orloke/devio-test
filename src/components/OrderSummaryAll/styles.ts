import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;

  button {
    border: none;
    background-color: #e6e6e6;
    margin: auto;
    padding: 0 0.5rem;
    border-radius: 5px;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-right: 2%;
  border-bottom: 1px dashed #a8a8a8;
  h6 {
    margin: 0;
  }
`;

export const DivRequests = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 0.7rem;
  }
`;
