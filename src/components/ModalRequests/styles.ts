import styled from 'styled-components';

interface props {
  checked: boolean;
}

export const DivRequests = styled.div`
  display: flex;
  margin-bottom: 1rem;
  .imgRequest {
    width: 25%;
    margin-right: 2%;
  }
  .descriptionRequest {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .total {
    margin-left: auto;
    font-weight: bold;
  }

  .divButton {
    display: flex;
    justify-content: space-between;
    width: 50%;
    border-radius: 30px;
    align-items: center;
    border: 1px solid green;
    button {
      border-radius: 50%;
      background-color: green;
      border: none;
      /* padding: 0.5rem; */
      color: white;
      width: 30px;
      font-size: 1.5rem;
    }
  }
`;

export const DivAdditional = styled.div`
  display: flex;
  flex-direction: column;
`;
