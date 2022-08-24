import styled from 'styled-components';

export const DivRequests = styled.div`
  display: flex;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  .imgRequest {
    width: 25%;
    margin-right: 2%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .descriptionRequest {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    text-align: justify;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .total {
    margin-left: auto;
    font-weight: bold;
    @media (max-width: 768px) {
      margin: 1rem 0;
      font-size: 1.5rem;
    }
  }

  .divButton {
    display: flex;
    justify-content: space-between;
    width: 50%;
    border-radius: 30px;
    align-items: center;
    border: 1px solid green;
    margin-top: 1rem;
    @media (max-width: 768px) {
      width: 100%;
    }
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
