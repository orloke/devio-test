import { Button, Container, DivButtons, DivDetails } from './styles';

interface PropsCardRequest {
  displayButtonConfirm: string;
}

export function CardRequests({ displayButtonConfirm }: PropsCardRequest) {
  return (
    <Container>
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
    </Container>
  );
}
