import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #a8a8a8;
  border-radius: 10px;
  padding: 1rem;
`;

export const DivRequests = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 0.7rem;
  }
`;

export const TotalRequest = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  border-top: 1px dashed #a8a8a8;
  h6 {
    margin-top: 0.5rem;
  }
`;
