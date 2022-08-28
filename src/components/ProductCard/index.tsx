import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatValue } from '../../helps';
import { RootState } from '../../store';
import { removeAdditioanl, setModal, takeProduct } from '../../store/products';
import { Card, Content } from './styles';

interface PropsCard {
  image: string;
  title: string;
  description: string;
  price: number;
}

export function ProductCard({ image, title, description, price }: PropsCard) {
  const dispatch = useDispatch();
  const newPrice = formatValue(price);
  const handleCard = () => {
    dispatch(setModal(true));
    dispatch(takeProduct({ title, description, price, image }));
    dispatch(removeAdditioanl('removeAll'));
  };

  const market = useSelector((state: RootState) => state.productsSlice.market);
  const select = market.map(item => item.title);

  return (
    <Card click={select.includes(title)} onClick={() => handleCard()}>
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
