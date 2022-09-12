import styled from 'styled-components';

interface props {
  checked: boolean;
}

export const DivAdditional = styled.div`
  display: flex;
  margin-top: 1rem;
  .cardImg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 80px;
    margin-right: 3%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .descriptionAditional {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 58%;
  }
  .divValue {
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
  }
`;

export const DivCheckbox = styled.div<props>`
  width: 20px;
  height: 20px;
  background-color: white;
  border: 2px solid green;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .active {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: green;
    display: ${props => (props.checked ? 'block' : 'none')};
  }
`;
