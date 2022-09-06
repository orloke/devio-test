import Head from 'next/head';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Cards,
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
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/Buttons';
import { ModalRequests } from '../components/ModalRequests';
import { Produto } from '../types';
import { getProducts, getProductsCategory } from '../service';
import { RootState } from '../store';
import { formatValue } from '../helps';
import { OrderSummaryAll } from '../components/OrderSummaryAll';
import { removeProduct } from '../store/products';

function Home() {
  const [products, setProducts] = useState([] as Produto[]);
  const router = useRouter();
  const [search, setSearch] = useState('');

  useEffect(() => {
    const takeProducts = async () => {
      const response = await getProducts(search);
      setProducts(response);
    };

    takeProducts();
  }, [search]);

  const dispatch = useDispatch();

  const marketProduct = useSelector(
    (state: RootState) => state.productsSlice.market,
  );

  const totalRequests = marketProduct.reduce((a, b) => a + b.product.price, 0);
  const newTotalRequests = formatValue(totalRequests);

  const cancelRequest = () => {
    dispatch(removeProduct('removeAll'));
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
            <Cards onClick={() => searchCategory('hamburger')}>
              <Image
                width={100}
                height={100}
                src={hamburger}
                alt="Refrigerente "
              />
              <p>hamburger</p>
            </Cards>
            <Cards onClick={() => searchCategory('refrigerante')}>
              <Image
                width={140}
                height={150}
                src={refrigerante}
                alt="Refrigerente "
              />
              <p>Refrigerante</p>
            </Cards>
            <Cards onClick={() => searchCategory('sobremessa')}>
              <Image
                width={100}
                height={150}
                src={sobremesa}
                alt="Refrigerente "
              />
              <p>Sobremesa</p>
            </Cards>
            <Cards onClick={() => searchCategory('Cerveja')}>
              <Image
                width={100}
                height={150}
                src={cerveja}
                alt="Refrigerente "
              />
              <p>Cerveja</p>
            </Cards>
            <Cards onClick={() => searchCategory('')}>
              <Image width={100} height={150} src={combo} alt="Refrigerente " />
              <p>Todos</p>
            </Cards>
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
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
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
              {marketProduct.map(
                item =>
                  item.product.title !== '' && (
                    <OrderSummaryAll
                      key={item.product.title}
                      title={item.product.title}
                      id={item.product.id}
                      qtd={item.product.qtd}
                      price={item.product.price}
                      additional={item.additional}
                    />
                  ),
              )}
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
