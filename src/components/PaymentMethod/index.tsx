import { ReactNode, useState } from 'react';
import { Checkbox } from '../Checkbox';
import { Container } from './styles';

interface PropsPaymentMethods {
  icon: ReactNode;
  nameMethod: string;
  id: string;
}

export default function PaymentMethod({
  icon,
  nameMethod,
  id,
}: PropsPaymentMethods) {
  return (
    <Container>
      <div className="paymentName">
        {icon}
        <h6>{nameMethod}</h6>
      </div>
      <Checkbox id={id} />
    </Container>
  );
}
