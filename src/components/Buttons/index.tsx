import { DivButton } from './styles';

interface PropsButton {
  text: string;
  variant?: 'outline' | 'fill';
  ml?: number;
  onclick?: () => void;
  disabled?: boolean;
}
export function Button({ variant, text, ml, onclick, disabled }: PropsButton) {
  return (
    <DivButton disabled={disabled} onClick={onclick} variant={variant} ml={ml}>
      {text}
    </DivButton>
  );
}
