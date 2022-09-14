import styled from 'styled-components';

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
