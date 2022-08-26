import { formatValue } from '../../helps';
import { Container, DivRequests, TotalRequest } from './styles';

interface PropsOrderSummary {
  title: string;
  price: string;
  total: number;
  additional: {
    title: string;
    price: number;
  };
}

export function OrderSummary({
  title,
  price,
  total,
  additional,
}: PropsOrderSummary) {
  const newPrice = formatValue(additional.price);
  return (
    <Container>
      <DivRequests>
        <h6>{title}</h6>
        <h6>{price}</h6>
      </DivRequests>
      {additional.title !== '' && (
        <DivRequests>
          <span>{additional.title}</span>
          <span>{newPrice}</span>
        </DivRequests>
      )}

      <TotalRequest>
        <h6>Total do pedido:</h6>
        <h5>{total}</h5>
      </TotalRequest>
    </Container>
  );
}
