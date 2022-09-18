import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import router from 'next/router';
import {
  Container,
  DivButtons,
  DivContent,
  DivRequest,
  DivSubtitle,
} from '../styles/home';
import refrigerante from '../../public/images/refrigerante.png';
import sobremesa from '../../public/images/sobremesa.png';
import cerveja from '../../public/images/cerveja.png';
import hamburger from '../../public/images/hamburguer2.png';
import combo from '../../public/images/combo.png';
import { Button } from '../components/Buttons';
import { ModalRequests } from '../components/ModalRequests';
import { Produto } from '../types';
import { getProducts, getProductsCategory } from '../service';
import { RootState } from '../store';
import { OrderSummaryAll } from '../components/OrderSummaryAll';
import { deleteProductMarket } from '../store/products';
import { CardCategories } from '../components/CardCategories';
import { ComponentInput } from '../components/ComponentInput';
import { TotalRequests } from '../components/TotalRequests';
import { RenderProductsHome } from '../components/RenderProductsHome';

function Home() {
  const [products, setProducts] = useState([] as Produto[]);
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
        <ComponentInput
          type="text"
          value={search}
          onChange={setSearch}
          placeholder="O que você procura?"
          width="40%"
          responsive="100%"
        >
          <h1>Seja bem vindo!</h1>
        </ComponentInput>
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
          <RenderProductsHome products={products} search={search} />
        </DivContent>
        <DivContent>
          <h2>Pedidos</h2>
          {marketProduct.length === 0 ? (
            <p>Faça um pedido!</p>
          ) : (
            <DivRequest>
              {marketProduct.map(item => (
                <OrderSummaryAll
                  key={item.id}
                  title={item.product.title}
                  id={item.id}
                  qtd={item.product.qtd}
                  price={item.product.price}
                  additional={item.additional}
                />
              ))}
              <TotalRequests market={marketProduct} />
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
            text="Continuar para pagamento"
            ml={2}
            onclick={() => router.push('/payment')}
          />
        </DivButtons>
      </Container>
    </>
  );
}
export default Home;
