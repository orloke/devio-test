import styled from 'styled-components';

interface props {
  backgroundButton: boolean;
}

export const DivHeader = styled.div`
  background-color: green;

  div {
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    nav {
      display: flex;
      align-items: center;
      gap: 1rem;
      button {
        background-color: transparent;
        border: none;
        color: white;
        font-weight: bold;
        padding: 0.5rem;
        cursor: pointer;
      }

      .active {
        background-color: #184d18;
        border-radius: 10px;
      }
    }
  }
`;
