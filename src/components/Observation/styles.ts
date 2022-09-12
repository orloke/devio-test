import styled from 'styled-components';

interface props {
  marginTop?: number;
  marginBottom?: number;
}

export const DivObservation = styled.div<props>`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.marginTop}rem;
  margin-bottom: ${props => props.marginBottom}rem;
  textarea {
    background-color: #ebebeb;
    border-radius: 3px;
    padding: 0.7rem;
    border: none;
    resize: none;
  }
`;
