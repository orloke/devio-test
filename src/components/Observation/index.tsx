import { ReactNode } from 'react';
import { DivObservation } from './styles';

interface PropsObservation {
	rows: number;
	marginTop: number;
	marginBottom: number;
	children: ReactNode;
	placeholder?: string;
	readonly: boolean;
	changeText: string;
	onchange: React.Dispatch<React.SetStateAction<string>>;
}

export function Observation({
	rows,
	marginTop,
	marginBottom,
	children,
	placeholder,
	readonly,
	changeText,
	onchange,
}: PropsObservation) {
	return (
		<DivObservation marginTop={marginTop} marginBottom={marginBottom}>
			{children}
			<textarea
				value={changeText}
				readOnly={readonly}
				rows={rows}
				placeholder={placeholder}
				onChange={e => onchange(e.target.value)}
			/>
		</DivObservation>
	);
}
