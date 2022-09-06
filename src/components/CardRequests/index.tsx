import { Additional } from '../../types';
import { Container, DivDetails } from './styles';

interface PropsCardRequest {
  title: string;
  qtd: number;
  additional: Additional[];
  observation: string;
}

export function CardRequests({
  title,
  qtd,
  additional,
  observation,
}: PropsCardRequest) {
  return (
    <Container>
      <div className="detailsObservation">
        <div className="imageDetails">
          <DivDetails>
            <h5>
              {qtd}x {title}
            </h5>
            <div className="additionalDetails">
              <span>Adicionais: </span>
              {additional.map((item, index) => (
                <span key={item.title}>
                  {item.title}
                  {index < additional.length - 1 ? ', ' : ''}
                </span>
              ))}
            </div>
            {observation && <span>Observação: {observation} </span>}
          </DivDetails>
        </div>
      </div>
    </Container>
  );
}
