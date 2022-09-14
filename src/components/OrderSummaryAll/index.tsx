import { useDispatch } from 'react-redux';
import { formatValue } from '../../helps';
import { deleteProductMarket } from '../../store/products';
import { Additional } from '../../types';
import { Container, Content, DivRequests } from './styles';

interface PropsOrderSummary {
  title: string;
  price: number;
  id: number;
  qtd: number;
  additional: Additional[];
}

export function OrderSummaryAll({
  title,
  price,
  additional,
  qtd,
  id,
}: PropsOrderSummary) {
  const dispatch = useDispatch();

  const newPrice = price * qtd;

  const deleteRequest = (idProduct: number) => {
    dispatch(deleteProductMarket({ id: idProduct }));
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
                <span>1x {item.title}</span>
                <span>{formatValue(item.price)}</span>
              </DivRequests>
            ),
        )}
      </Content>
      <button type="button" onClick={() => deleteRequest(id)}>
        x
      </button>
    </Container>
  );
}
