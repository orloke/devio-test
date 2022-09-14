import { Dispatch, ReactNode, SetStateAction } from 'react';
import { DivTitleInput } from './styles';

interface PropsComponentInput {
  children: ReactNode;
  placeholder?: string;
  onChange: Dispatch<SetStateAction<string>>;
  value: string | number;
  width?: string;
  marginTop?: string;
}

export function ComponentInput({
  children,
  placeholder,
  onChange,
  value,
  width,
  marginTop,
}: PropsComponentInput) {
  return (
    <DivTitleInput width={width} marginTop={marginTop}>
      {children}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </DivTitleInput>
  );
}
