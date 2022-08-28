import { Observation } from '../Observation';
import { Button, Container, DivButtons, DivDetails } from './styles';

interface PropsCardRequest {
  displayButtonConfirm: string;
}

export function CardRequests({ displayButtonConfirm }: PropsCardRequest) {
  return (
    <Container>
      <div className="detailsObservation">
        <div className="imageDetails">
          <img src="/images/hamburguer.jpg" alt="pedido" />
          <DivDetails>
            <h5>201-Ricardo</h5>
            <span>1x hamburguer</span>
          </DivDetails>
          <DivButtons>
            <Button
              display={displayButtonConfirm}
              backgroundColor="00890059"
              color="green"
            >
              ✓
            </Button>
            <Button backgroundColor="#eacbcb" color="red" marginLeft={1}>
              X
            </Button>
          </DivButtons>
        </div>
        <Observation
          marginTop={1}
          marginBottom={1}
          rows={1}
          placeholder="Ex: retire a cebola"
        >
          <h6>Observações do pedido</h6>
        </Observation>
      </div>
    </Container>
  );
}
