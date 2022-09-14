import { formatValue } from '../../helps';
import { Market } from '../../types';
import { Container } from './styles';

interface PropsTotalRequests {
  market: Market[];
}

export function TotalRequests({ market }: PropsTotalRequests) {
  const totalRequests = market.reduce((acc, crr) => acc + crr.product.total, 0);

  const newTotalRequests = formatValue(totalRequests);
  return (
    <Container>
      <h6>Total do pedido:</h6>
      <h5>{newTotalRequests}</h5>
    </Container>
  );
}
