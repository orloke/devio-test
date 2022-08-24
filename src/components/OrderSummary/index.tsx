import { Container, DivRequests, TotalRequest } from './styles';

export function OrderSummary() {
  return (
    <Container>
      <DivRequests>
        <h6>1x Smash da casa</h6>
        <h6>R$ 30,50</h6>
      </DivRequests>
      <TotalRequest>
        <h6>Total do pedido:</h6>
        <h5>R$ 30,50</h5>
      </TotalRequest>
    </Container>
  );
}
