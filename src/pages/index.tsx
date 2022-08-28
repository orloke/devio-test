import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
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

import guarana from '../../public/images/guarana.jpg';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/Buttons';
import { ModalRequests } from '../components/ModalRequests';
import { Produto } from '../types';
import { getProducts } from '../service';
import { RootState } from '../store';
import { formatValue } from '../helps';
import { OrderSummaryAll } from '../components/OrderSummaryAll';
import { removeProduct } from '../store/products';

function Home() {
  const [products, setProducts] = useState([] as Produto[]);
  const dispatch = useDispatch();

  useEffect(() => {
    const takeProducts = async () => {
      const response = await getProducts();
      setProducts(response);
    };
    takeProducts();
  }, []);

  const marketProduct = useSelector(
    (state: RootState) => state.productsSlice.market,
  );

  const totalRequests = marketProduct.reduce((a, b) => a + b.product.price, 0);
  const newTotalRequests = formatValue(totalRequests);

  const cancelRequest = () => {
    dispatch(removeProduct('removeAll'));
  };

  return (
    <Container>
      <ModalRequests />
      <DivTitleInput>
        <h1>Seja bem vindo!</h1>
        <input type="text" placeholder="O que você procura?" />
      </DivTitleInput>
      <DivContent>
        <DivSubtitle>
          <h2>Categorias</h2>
          <p>Navegue por categorias</p>
        </DivSubtitle>
        <div className="categories">
          <Cards>
            <Image width={100} height={150} src={guarana} alt="Refrigerente " />
            <p>Combos</p>
          </Cards>
          <Cards>
            <Image width={100} height={150} src={guarana} alt="Refrigerente " />
            <p>Combos</p>
          </Cards>
          <Cards>
            <Image width={100} height={150} src={guarana} alt="Refrigerente " />
            <p>Combos</p>
          </Cards>
          <Cards>
            <Image width={100} height={150} src={guarana} alt="Refrigerente " />
            <p>Combos</p>
          </Cards>
        </div>
      </DivContent>
      <DivContent>
        <DivSubtitle>
          <h2>Produtos</h2>
          <p>Selecione um produto para adicionar ao seu pedido</p>
        </DivSubtitle>
        <DivCards>
          {products.map(item => (
            <ProductCard
              key={item.id}
              image="/images/hamburguer.png"
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </DivCards>
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
          variant="outline"
          text="cancelar"
          onclick={() => cancelRequest()}
        />
        <Button variant="fill" text="Finalizar pedido" ml={2} />
      </DivButtons>
    </Container>
  );
}
export default Home;
