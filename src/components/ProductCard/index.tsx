import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { changeSelect, setModal, takeProduct } from '../../store/products';
import { Card, Content } from './styles';

interface PropsCard {
  image: string;
  title: string;
  description: string;
  price: number;
}

export function ProductCard({ image, title, description, price }: PropsCard) {
  const dispatch = useDispatch();
  const teste = useSelector((state: RootState) => state.productsSlice.select);
  const [select, setSelect] = useState(false);
  const handleCard = () => {
    setSelect(true);
    dispatch(setModal(true));
    dispatch(changeSelect(title));
    dispatch(takeProduct({ title, description, price, image }));
  };
  return (
    <Card click={select && teste === title} onClick={() => handleCard()}>
      <Content>
        <div className="teste2">
          <img src={image} alt={title} />
        </div>
        <div className="teste" />
        <div className="teste3">
          <h4>{title}</h4>
          <small>{description}</small>
          <strong>R$ {price.toString().replace('.', ',')}0</strong>
        </div>
      </Content>
      <div className="selected">Selecionado</div>
    </Card>
  );
}
