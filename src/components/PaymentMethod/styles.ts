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
