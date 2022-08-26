import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Cards,
  Container,
  DivButtons,
  DivCards,
  DivContent,
  DivSubtitle,
  DivTitleInput,
} from '../styles/home';

import guarana from '../../public/images/guarana.jpg';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/Buttons';
import { ModalRequests } from '../components/ModalRequests';
import { Products } from '../types';
import { getProducts } from '../service';

function Home() {
  const [products, setProducts] = useState([] as Products[]);

  useEffect(() => {
    const takeProducts = async () => {
      const response = await getProducts();
      setProducts(response);
    };
    takeProducts();
  }, []);

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
      <DivButtons>
        <Button variant="outline" text="cancelar" />
        <Button variant="fill" text="Finalizar pedido" ml={2} />
      </DivButtons>
    </Container>
  );
}
export default Home;
