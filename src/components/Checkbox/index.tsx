import { DivCheckbox } from './styles';

interface PropsCheckbox {
  checked: boolean;
  onClick?: () => void;
}

export function Checkbox({ checked, onClick }: PropsCheckbox) {
  return (
    <DivCheckbox onClick={onClick} checked={checked}>
      <div className="active" />
    </DivCheckbox>
  );
}
