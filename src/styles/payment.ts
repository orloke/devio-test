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
    align-items: center;
    @media (max-width: 768px) {
      justify-content: center;
    }
    h3 {
      margin: 0;
      margin-left: 0.5rem;
    }
  }
`;

interface PropsMain {
  width: string;
}

export const Main = styled.div<PropsMain>`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  margin-top: 2rem;
  @media (max-width: 768px) {
    width: 90%;
  }
  .subTitle {
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 0.3rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
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
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
  margin-top: auto;
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    margin: auto;
    gap: 1rem;
    margin-top: 1rem;
    width: 90%;
  }
`;
