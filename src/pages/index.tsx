import Head from 'next/head';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
	Container,
	DivButtons,
	DivCards,
	DivContent,
	DivRequest,
	DivSubtitle,
	DivTitleInput,
	TotalRequest,
} from '../styles/home';
import refrigerante from '../../public/images/refrigerante.png';
import sobremesa from '../../public/images/sobremesa.png';
import cerveja from '../../public/images/cerveja.png';
import hamburger from '../../public/images/hamburguer2.png';
import combo from '../../public/images/combo.png';
import loading from '../../public/images/loading.svg';
import { CardProduct } from '../components/CardProduct';
import { Button } from '../components/Buttons';
import { ModalRequests } from '../components/ModalRequests';
import { Produto } from '../types';
import { getProducts, getProductsCategory } from '../service';
import { RootState } from '../store';
import { formatValue } from '../helps';
import { OrderSummaryAll } from '../components/OrderSummaryAll';
import { deleteProductMarket } from '../store/products';
import CardCategories from '../components/CardCategories';

function Home() {
	const [products, setProducts] = useState([] as Produto[]);
	const router = useRouter();
	const [search, setSearch] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		const takeProducts = async () => {
			const response = await getProducts(search);
			setProducts(response);
		};

		takeProducts();
	}, [search]);

	const marketProduct = useSelector(
		(state: RootState) => state.productsSlice.market,
	);

	const totalRequests = marketProduct.reduce(
		(acc, crr) => acc + crr.product.total,
		0,
	);

	const newTotalRequests = formatValue(totalRequests);

	const cancelRequest = () => {
		dispatch(deleteProductMarket('removeAll'));
	};

	const searchCategory = async (categorie: string) => {
		const response = await getProductsCategory(categorie);
		return setProducts(response);
	};

	return (
		<>
			<Head>
				<title>FastFood</title>
			</Head>
			<Container>
				<ModalRequests />
				<DivTitleInput>
					<h1>Seja bem vindo!</h1>
					<input
						type="text"
						placeholder="O que você procura?"
						value={search}
						onChange={e => setSearch(e.target.value)}
					/>
				</DivTitleInput>
				<DivContent>
					<DivSubtitle>
						<h2>Categorias</h2>
						<p>Navegue por categorias</p>
					</DivSubtitle>
					<div className="categories">
						<CardCategories
							onclick={() => searchCategory('hamburger')}
							image={hamburger}
							name="Hamburger"
						/>
						<CardCategories
							onclick={() => searchCategory('refrigerante')}
							image={refrigerante}
							name="Refrigerante"
						/>
						<CardCategories
							onclick={() => searchCategory('sobremesa')}
							image={sobremesa}
							name="Sobremesa"
						/>
						<CardCategories
							onclick={() => searchCategory('cerveja')}
							image={cerveja}
							name="Cerveja"
						/>
						<CardCategories
							onclick={() => searchCategory('')}
							image={combo}
							name="Todos"
						/>
					</div>
				</DivContent>
				<DivContent>
					<DivSubtitle>
						<h2>Produtos</h2>
						<p>Selecione um produto para adicionar ao seu pedido</p>
					</DivSubtitle>
					{products.length === 0 && !search ? (
						<Image src={loading} />
					) : (
						<DivCards>
							{products.length !== 0 ? (
								products.map(item => (
									<CardProduct
										key={item.id}
										id={item.id}
										image={item.image}
										title={item.title}
										description={item.description}
										price={item.price}
										category={item.category}
									/>
								))
							) : (
								<p>Produto não encontrado</p>
							)}
						</DivCards>
					)}
				</DivContent>
				<DivContent>
					<h2>Pedidos</h2>
					{marketProduct.length === 0 ? (
						<p>Faça um pedido!</p>
					) : (
						<DivRequest>
							{marketProduct.map(item => (
								<OrderSummaryAll
									key={item.product.title}
									title={item.product.title}
									id={item.product.id}
									qtd={item.product.qtd}
									price={item.product.price}
									additional={item.additional}
								/>
							))}
							<TotalRequest>
								<h6>Total do pedido:</h6>
								<h5>{newTotalRequests}</h5>
							</TotalRequest>
						</DivRequest>
					)}
				</DivContent>
				<DivButtons>
					<Button
						disabled={marketProduct.length === 0}
						variant="outline"
						text="cancelar"
						onclick={() => cancelRequest()}
					/>
					<Button
						disabled={marketProduct.length === 0}
						variant="fill"
						text="Finalizar pedido"
						ml={2}
						onclick={() => router.push('/payment')}
					/>
				</DivButtons>
			</Container>
		</>
	);
}
export default Home;
