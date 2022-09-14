import styled from 'styled-components';

export const Container = styled.div`
  max-width: 70%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px - 2rem);
  @media (max-width: 768px) {
    display: flex;
    text-align: center;
    max-width: 95%;
    min-height: calc(100vh - 128px - 2rem);
  }

  input {
    height: 50px;
    border-radius: 6px;
    padding: 0.5rem;
    border: none;
  }
  input {
    border: 1px solid gray;
    margin-right: 1rem;
    width: 40%;
    min-width: 200px;
    @media (max-width: 768px) {
      margin: 0;
      margin-bottom: 1rem;
      width: 100%;
    }
  }
`;

export const InfoRequest = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  border: 1px solid #a8a8a8;
  border-radius: 10px;
  padding: 1rem;
`;
