import styled from 'styled-components';

export const Container = styled.div`
  max-width: 90%;
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
  .categories {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 2rem;
    column-gap: 2rem;
    @media (max-width: 1300px) {
      justify-content: flex-start;
    }
    @media (max-width: 768px) {
      /* flex-direction: column;
      gap: 1rem;
      width: 100%;
      text-align: center;
      align-items: center; */
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const Cards = styled.div`
  position: relative;
  width: 150px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin: auto;
  }
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

export const DivCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 2rem;
  column-gap: 2rem;
  justify-content: space-between;
  @media (max-width: 1300px) {
    justify-content: flex-start;
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const DivRequest = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #a8a8a8;
  border-radius: 10px;
  padding: 1rem;
`;

export const TotalRequest = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  h6 {
    margin-top: 0.5rem;
  }
  h5 {
    margin-left: auto;
  }
`;
