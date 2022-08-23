import { useState } from 'react';
import { Card, Content } from './styles';

interface PropsCard {
  image: string;
  title: string;
  description: string;
  price: string;
}

export function ProductCard({ image, title, description, price }: PropsCard) {
  const [select, setSelect] = useState(false);
  return (
    <Card click={select} onClick={() => setSelect(!select)}>
      <Content>
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <small>{description}</small>
        <strong>R$ {price}</strong>
      </Content>
      <div className="selected">Selecionado</div>
    </Card>
  );
}
