import styled from 'styled-components';

interface PropsButton {
  backgroundColor: string;
  color: string;
  margin?: string;
  display?: string;
}

export const Container = styled.div`
  max-width: 70%;
  margin: 1rem auto;
  display: flex;
  min-height: 50vh;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    max-width: 95%;
    margin-top: 2rem;
  }
  .requests {
    display: flex;
    flex-direction: column;
    width: 50%;
    border-right: 2px solid black;
    padding: 1rem 0;
    padding-right: 2rem;
    gap: 1rem;
    text-align: center;
    @media (max-width: 768px) {
      width: 100%;
      border: none;
      border-bottom: 2px solid black;
      padding: 0;
      padding-bottom: 2rem;
    }
  }
  .requestsFinish {
    width: 50%;
    padding: 1rem 0;
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    @media (max-width: 768px) {
      width: 100%;
      padding: 0;
      padding-top: 2rem;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  border-radius: 10px;
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button<PropsButton>`
  background-color: ${PropsButton => PropsButton.backgroundColor};
  width: 30px;
  height: 30px;
  margin: ${PropsButton => PropsButton.margin};
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
