import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { CardRequests } from '../../components/CardRequests';
import { RootState } from '../../store';
import {
	deleteForDelivery,
	deleteForPayment,
	addForDelivery,
} from '../../store/products';
import { Button, Container, Content, DivButtons } from '../../styles/kitchen';

export default function Kitchen() {
	const dispatch = useDispatch();

	const marketRequests = useSelector(
		(state: RootState) => state.productsSlice.finished,
	);
	const delivery = useSelector(
		(state: RootState) => state.productsSlice.delivery,
	);

	const newList = [...marketRequests];

	const handleDelivery = (idMarket: number) => {
		const request = newList.filter(d => d.id === idMarket);
		dispatch(deleteForPayment({ id: idMarket }));
		dispatch(addForDelivery(request[0]));
	};

	const deleteMarket = (idMarket: number) => {
		dispatch(deleteForPayment({ id: idMarket }));
	};

	const deleteDelivery = (idMarket: number) => {
		dispatch(deleteForDelivery({ id: idMarket }));
	};

	return (
		<>
			<Head>
				<title>Cozinha</title>
			</Head>
			<Container>
				<div className="requests">
					<h3>Preparando:</h3>
					{marketRequests.map(item => (
						<Content key={`${item.id}preparando`}>
							<h5>Cliente: {item.name}</h5>
							{item.market.map(product => (
								<CardRequests
									key={product.product.title}
									qtd={product.product.qtd}
									title={product.product.title}
									additional={product.additional}
									observation={product.product.observation}
								/>
							))}
							<DivButtons>
								<Button
									display="block"
									backgroundColor="00890059"
									color="green"
									onClick={() => handleDelivery(item.id)}
								>
									✓
								</Button>
								<Button
									backgroundColor="#eacbcb"
									color="red"
									onClick={() => {
										deleteMarket(item.id);
									}}
								>
									X
								</Button>
							</DivButtons>
						</Content>
					))}
				</div>
				<div className="requestsFinish">
					<h3>Pronto:</h3>
					{delivery.map(item => (
						<Content key={`${item.id}pronto`}>
							<h5>Cliente: {item.name}</h5>
							{item.market.map(product => (
								<CardRequests
									key={product.product.title}
									qtd={product.product.qtd}
									title={product.product.title}
									additional={product.additional}
									observation={product.product.observation}
								/>
							))}
							<DivButtons>
								<Button
									backgroundColor="#eacbcb"
									color="red"
									margin="auto"
									onClick={() => {
										deleteDelivery(item.id);
									}}
								>
									X
								</Button>
							</DivButtons>
						</Content>
					))}
				</div>
			</Container>
		</>
	);
}
