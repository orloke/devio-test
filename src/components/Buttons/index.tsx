import { DivButton } from './styles';

interface PropsButton {
  text: string;
  variant: string;
  ml?: number;
}
export function Button({ variant, text, ml }: PropsButton) {
  return (
    <DivButton variant={variant} ml={ml}>
      {text}
    </DivButton>
  );
}
