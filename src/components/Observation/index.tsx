import { ReactNode } from 'react';
import { DivObservation } from './styles';

interface PropsObservation {
  rows: number;
  marginTop: number;
  marginBottom: number;
  children: ReactNode;
  placeholder: string;
}

export function Observation({
  rows,
  marginTop,
  marginBottom,
  children,
  placeholder,
}: PropsObservation) {
  return (
    <DivObservation marginTop={marginTop} marginBottom={marginBottom}>
      {children}
      <textarea rows={rows} placeholder={placeholder} />
    </DivObservation>
  );
}
