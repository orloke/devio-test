import { Dispatch, ReactNode, SetStateAction } from 'react';
import { DivTitleInput } from './styles';

interface PropsComponentInput {
  children: ReactNode;
  placeholder?: string;
  onChange?: Dispatch<SetStateAction<string>>;
  value?: string | number;
  width?: string;
  marginTop?: string;
  type: string;
  responsive?: string;
}

export function ComponentInput({
  children,
  placeholder,
  onChange,
  value,
  width,
  marginTop,
  type,
  responsive,
}: PropsComponentInput) {
  const handleInput = (event: string) => {
    if (onChange) {
      onChange(event);
    }
  };
  return (
    <DivTitleInput width={width} marginTop={marginTop} responsive={responsive}>
      {children}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => handleInput(e.target.value)}
      />
    </DivTitleInput>
  );
}
