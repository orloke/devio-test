import { Container } from './styles';

interface PropsCheckbox {
  id: string;
}

export function Checkbox({ id }: PropsCheckbox) {
  return (
    <Container>
      <label htmlFor={id}>
        <input type="radio" id={id} name="question" />
        <div />
      </label>
    </Container>
  );
}
