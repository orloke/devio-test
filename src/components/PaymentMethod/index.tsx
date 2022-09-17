import { ReactNode, useState } from 'react';
import { Container, Checkbox } from './styles';

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
      <Checkbox>
        <label htmlFor={id}>
          <input type="radio" id={id} name="question" />
          <div />
        </label>
      </Checkbox>
    </Container>
  );
}
