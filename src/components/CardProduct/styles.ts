import styled from 'styled-components';

interface props {
  click: boolean;
}

export const Card = styled.div<props>`
  width: 150px;
  height: 180px;
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-out;
  @media (max-width: 768px) {
    margin: auto;
  }

  &:hover {
    transform: scale(1.1);
    z-index: 1;
  }
  .selected {
    position: absolute;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background-color: rgba(11, 156, 49, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    display: ${props => (props.click ? 'flex' : 'none')};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: #f5f8f5;
  border-radius: 10px;
  position: relative;

  .teste2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    background-color: transparent;
    height: 70%;
  }

  .teste {
    width: 100%;
    height: 40%;
    border-radius: 10px;
    background-color: green;
  }

  .teste3 {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }

  img {
    width: 50%;
    margin: auto;
  }

  h4 {
    color: black;
    margin-bottom: 0;
    font-size: 1.2rem;
  }

  strong {
    margin: 0.5rem 0;
    font-weight: bold;
  }
`;
