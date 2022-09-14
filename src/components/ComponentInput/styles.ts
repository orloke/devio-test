import styled from 'styled-components';

interface PropsDivTitleInput {
  width?: string;
  marginTop?: string;
}

export const DivTitleInput = styled.div<PropsDivTitleInput>`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.marginTop || '4rem'};
  width: ${props => props.width || '100%'};
  input {
    width: 100%;
    border: none;
    background-color: #ebebeb;
    border-radius: 3px;
    padding: 0.7rem;
    font-size: 1rem;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
