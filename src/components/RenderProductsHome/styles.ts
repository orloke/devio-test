import styled from 'styled-components';

export const Container = styled.div`
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
