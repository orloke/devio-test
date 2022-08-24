import styled from 'styled-components';

interface PropsButton {
  backgroundColor: string;
  color: string;
  marginLeft?: number;
  display?: string;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  border-radius: 10px;

  img {
    border-radius: 10px;
  }
`;

export const DivDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  justify-content: center;
  h5 {
    margin: 0;
    font-size: 1rem;
  }
  span {
    font-size: 0.7rem;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Button = styled.button<PropsButton>`
  background-color: ${PropsButton => PropsButton.backgroundColor};
  width: 30px;
  height: 30px;
  margin-left: ${PropsButton => PropsButton.marginLeft}rem;
  border: none;
  border-radius: 10px;
  color: ${PropsButton => PropsButton.color};
  display: ${PropsButton => PropsButton.display};
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
