import styled from 'styled-components';

export const Container = styled.div`
  max-width: 70%;
  margin: 1rem auto;
  display: flex;
  min-height: 50vh;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    max-width: 95%;
    margin-top: 2rem;
  }
  .requests {
    width: 50%;
    border-right: 2px solid black;
    padding: 1rem 0;
    padding-right: 3rem;
    @media (max-width: 768px) {
      width: 100%;
      border: none;
      border-bottom: 2px solid black;
      padding: 0;
      padding-bottom: 2rem;
    }
  }
  .requestsFinish {
    width: 50%;
    padding: 1rem 0;
    padding-left: 3rem;
    @media (max-width: 768px) {
      width: 100%;
      padding: 0;
      padding-top: 2rem;
    }
  }
`;
