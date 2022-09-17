import { ReactNode } from 'react';
import { toast } from 'react-toastify';
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
  const teste = () => {
    toast.success(`Pagamento escolhido: ${id}`);
  };
  return (
    <Container>
      <div className="paymentName">
        {icon}
        <h6>{nameMethod}</h6>
      </div>
      <Checkbox onClick={teste}>
        <label htmlFor={id}>
          <input type="radio" id={id} name="question" />
          <div />
        </label>
      </Checkbox>
    </Container>
  );
}
