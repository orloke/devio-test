import { ReactNode, useState } from 'react';
import { Checkbox } from '../Checkbox';
import { Container } from './styles';

interface PropsPaymentMethods {
  icon: ReactNode;
  nameMethod: string;
}

export default function PaymentMethod({
  icon,
  nameMethod,
}: PropsPaymentMethods) {
  const [checked, setChecked] = useState(false);
  const handleSelectPayment = () => {
    setChecked(!checked);
  };
  return (
    <Container checked={checked}>
      <div className="paymentName">
        {icon}
        <h6>{nameMethod}</h6>
      </div>
      <Checkbox checked={checked} onClick={handleSelectPayment} />
    </Container>
  );
}
