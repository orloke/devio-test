import styled from 'styled-components';

export const Container = styled.div`
  max-width: 70%;
  margin: 0 auto;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const DivTitleInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  h1 {
    margin: 1rem 0;
  }
  input {
    border: none;
    background-color: #ebebeb;
    border-radius: 3px;
    padding: 0.7rem;
    font-size: 1rem;
    width: 40%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0%;
  div {
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      width: 100%;
    }
  }
`;

export const Cards = styled.div`
  position: relative;
  width: 250px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-weight: bold;
    font-size: 1.4rem;
  }
`;

export const DivSubtitle = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  h2 {
    margin-bottom: 0.5rem;
  }
`;
