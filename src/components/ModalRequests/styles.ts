import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

export const DivRequests = styled.div`
  display: flex;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  .imgRequest {
    position: relative;
    margin-right: 2%;
    @media (max-width: 768px) {
      display: flex;
      width: 100%;
      justify-content: center;
    }
  }
  .descriptionRequest {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    text-align: justify;
    h6 {
      font-weight: bold;
    }
    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      align-items: center;
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
      color: white;
      width: 30px;
      font-size: 1.5rem;
    }
    span {
      font-weight: bold;
      @media (max-width: 768px) {
        font-size: 1.3rem;
      }
    }
  }
`;

export const DivAdditional = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const DivModalFooter = styled(Modal.Footer)`
  justify-content: center;
`;
