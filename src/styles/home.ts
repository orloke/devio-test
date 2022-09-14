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
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    row-gap: 2rem;
    @media (max-width: 900px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 370px) {
      grid-template-columns: repeat(1, 1fr);
    }
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
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  row-gap: 2rem;

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 370px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const DivRequest = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #a8a8a8;
  border-radius: 10px;
  padding: 1rem;
`;
