import styled from 'styled-components';

interface props {
  click: boolean;
}

export const Card = styled.div<props>`
  width: 250px;
  height: 350px;
  position: relative;
  margin-bottom: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-out;

  &:hover {
    transform: scale(1.2);
    border: 2px solid green;
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

  img {
    width: 100%;
    border-radius: 10px;
  }

  h4 {
    color: black;
    margin-top: 1rem;
  }

  small {
    margin-top: 0.2rem;
  }

  strong {
    margin: 1rem 0;
    font-weight: bold;
  }
`;
