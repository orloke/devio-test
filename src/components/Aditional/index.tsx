import Image from 'next/image';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { formatValue } from '../../helps';
import { addAdditioanl, removeAdditioanl } from '../../store/products';
import { DivAdditional, DivCheckbox } from './styles';

interface PropsAditional {
	title: string;
	description: string;
	price: number;
	image: string;
}

export function Aditional({
	title,
	description,
	price,
	image,
}: PropsAditional) {
	const dispatch = useDispatch();
	const [checked, setChecked] = useState(false);

	const newPrice = formatValue(price);

	const takeAditional = (name: string) => {
		setChecked(!checked);
		if (!checked) {
			dispatch(addAdditioanl({ price, title: name }));
		} else {
			dispatch(removeAdditioanl({ title: name }));
		}
	};

	return (
		<DivAdditional>
			<div className="cardImg">
				<Image width={100} height={100} src={image} alt={title} />
			</div>
			<div className="descriptionAditional">
				<span>{title}</span>
				<span>{description}</span>
			</div>
			<div className="divValue">
				<span>R$ {newPrice}</span>
				<DivCheckbox onClick={() => takeAditional(title)} checked={checked}>
					<div className="active" />
				</DivCheckbox>
			</div>
		</DivAdditional>
	);
}
