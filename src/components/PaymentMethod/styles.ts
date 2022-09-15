import styled from 'styled-components';

interface PropsContainer {
  checked: boolean;
}

export const Container = styled.div<PropsContainer>`
  border: ${props => (props.checked ? '1px solid green' : '1px solid #a8a8a8')};
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
