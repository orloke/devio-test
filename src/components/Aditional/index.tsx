import { useState } from 'react';
import { DivAdditional, DivCheckbox } from './styles';

export default function Aditional() {
  const [checked, setChecked] = useState(true);
  return (
    <DivAdditional>
      <div className="cardImg">
        <img src="/images/guarana.jpg" alt="refrigerente" />
      </div>
      <div className="descriptionAditional">
        <span>Bacon</span>
        <span>10g</span>
      </div>
      <div className="divValue">
        <span>R$ 1,00</span>
        <DivCheckbox onClick={() => setChecked(!checked)} checked={checked}>
          <div className="active" />
        </DivCheckbox>
      </div>
    </DivAdditional>
  );
}
