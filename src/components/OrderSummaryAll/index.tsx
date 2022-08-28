import { useDispatch } from 'react-redux';
import { formatValue } from '../../helps';
import { removeProduct } from '../../store/products';
import { Container, Content, DivRequests } from './styles';

interface PropsOrderSummary {
  title: string;
  price: number;
  qtd: number;
  additional: {
    title: string;
    price: number;
  }[];
}

export function OrderSummaryAll({
  title,
  price,
  additional,
  qtd,
}: PropsOrderSummary) {
  const dispatch = useDispatch();
  const newPrice = price * qtd;
  const deleteRequest = (name: string) => {
    dispatch(removeProduct({ title: name }));
  };
  return (
    <Container>
      <Content>
        <DivRequests>
          <h6>
            {qtd}x {title}
          </h6>
          <h6>{formatValue(newPrice)}</h6>
        </DivRequests>
        {additional.map(
          item =>
            item.title !== '' && (
              <DivRequests key={item.title}>
                <span>
                  {qtd}x {item.title}
                </span>
                <span>{formatValue(item.price)}</span>
              </DivRequests>
            ),
        )}
      </Content>
      <button type="button" onClick={() => deleteRequest(title)}>
        x
      </button>
    </Container>
  );
}
