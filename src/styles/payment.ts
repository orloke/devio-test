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
  .title {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    h3 {
      margin: 0;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin-top: 2rem;
  .subTitle {
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 0.3rem;
  }
`;

export const InfoRequest = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  border: 1px solid #a8a8a8;
  border-radius: 10px;
  padding: 1rem;
`;

export const InfoClient = styled.div`
  display: flex;
  gap: 2%;
  width: 100%;
  margin-top: 1rem;
`;
