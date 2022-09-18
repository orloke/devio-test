import { Dispatch, ReactNode, SetStateAction } from 'react';
import { toast } from 'react-toastify';
import { Container, Checkbox } from './styles';

interface PropsPaymentMethods {
  icon: ReactNode;
  nameMethod: string;
  id: string;
  paymentType: Dispatch<SetStateAction<string>>;
}

export default function PaymentMethod({
  icon,
  nameMethod,
  id,
  paymentType,
}: PropsPaymentMethods) {
  const handlePaymentType = () => {
    paymentType(id);
    return toast.success(`Pagamento escolhido: ${id}`);
  };
  return (
    <Container>
      <div className="paymentName">
        {icon}
        <h6>{nameMethod}</h6>
      </div>
      <Checkbox>
        <label htmlFor={id}>
          <input
            onClick={handlePaymentType}
            type="radio"
            id={id}
            name="question"
          />
          <div />
        </label>
      </Checkbox>
    </Container>
  );
}
