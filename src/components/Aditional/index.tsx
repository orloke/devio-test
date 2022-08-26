import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { formatValue } from '../../helps';
import { selectAdditioanl } from '../../store/products';
import { DivAdditional, DivCheckbox } from './styles';

interface PropsAditional {
  title: string;
  description: string;
  price: number;
}

export function Aditional({ title, description, price }: PropsAditional) {
  const dispatch = useDispatch();
  const newPrice = formatValue(price);

  const [checked, setChecked] = useState(false);

  const takeAditional = (name: string) => {
    setChecked(!checked);
    if (!checked) {
      dispatch(selectAdditioanl({ price, title: name }));
    } else {
      dispatch(selectAdditioanl({ price: -price, title: name }));
    }
  };

  return (
    <DivAdditional>
      <div className="cardImg">
        <img src="/images/guarana.jpg" alt="refrigerente" />
      </div>
      <div className="descriptionAditional">
        <span>{title}</span>
        <span>{description}</span>
      </div>
      <div className="divValue">
        <span>R$ {newPrice}</span>
        <DivCheckbox onClick={() => takeAditional(title)} checked={checked}>
          <div className="active" />
        </DivCheckbox>
      </div>
    </DivAdditional>
  );
}
