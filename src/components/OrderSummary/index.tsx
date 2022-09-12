import { formatValue } from '../../helps';
import { Container, DivRequests, TotalRequest } from './styles';

interface PropsOrderSummary {
	title: string;
	price: string;
	total: number;
	additional: {
		title: string;
		price: number;
	}[];
}

export function OrderSummary({
	title,
	price,
	total,
	additional,
}: PropsOrderSummary) {
	const newTotal = formatValue(total);
	return (
		<Container>
			<DivRequests>
				<h6>{title}</h6>
				<h6>{price}</h6>
			</DivRequests>
			{additional.map(
				item =>
					item.title !== '' && (
						<DivRequests key={item.title}>
							<span>{item.title}</span>
							<span>{formatValue(item.price)}</span>
						</DivRequests>
					),
			)}

			<TotalRequest>
				<h6>Total do pedido:</h6>
				<h5>{newTotal}</h5>
			</TotalRequest>
		</Container>
	);
}
