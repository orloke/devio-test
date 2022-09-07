import { useDispatch, useSelector } from 'react-redux';
import { formatValue } from '../../helps';
import { RootState } from '../../store';
import {
  removeAdditioanl,
  setModal,
  takeProductModal,
} from '../../store/products';
import { Card, Content } from './styles';

interface PropsCard {
  image: string;
  title: string;
  description: string;
  price: number;
  id: number;
  category: string;
}

export function ProductCard({
  image,
  title,
  description,
  price,
  id,
  category,
}: PropsCard) {
  const dispatch = useDispatch();

  const market = useSelector((state: RootState) => state.productsSlice.market);
  const newPrice = formatValue(price);
  const select = market.map(item => item.product.id);

  const handleCard = () => {
    dispatch(setModal(true));
    dispatch(
      takeProductModal({ title, description, price, image, id, category }),
    );
    dispatch(removeAdditioanl('removeAll'));
  };

  return (
    <Card click={select.includes(id)} onClick={() => handleCard()}>
      <Content>
        <div className="teste2">
          <img src={image} alt={title} />
        </div>
        <div className="teste" />
        <div className="teste3">
          <h4>{title}</h4>
          <small>{description}</small>
          <strong>{newPrice}</strong>
        </div>
      </Content>
      <div className="selected">Selecionado</div>
    </Card>
  );
}
