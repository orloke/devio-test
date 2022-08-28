import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  button {
    border: none;
    background-color: #e6e6e6;
    margin: auto;
    padding: 0 0.5rem;
    border-radius: 5px;
  }
`;

export const Content = styled.div`
  border-bottom: 1px dashed #a8a8a8;
  padding: 1rem 0;
  width: 100%;
  margin-right: 1rem;
`;

export const DivRequests = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 0.7rem;
  }
`;
