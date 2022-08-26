import { DivButton } from './styles';

interface PropsButton {
  text: string;
  variant: string;
  ml?: number;
  onclick?: () => void;
}
export function Button({ variant, text, ml, onclick }: PropsButton) {
  return (
    <DivButton onClick={onclick} variant={variant} ml={ml}>
      {text}
    </DivButton>
  );
}
