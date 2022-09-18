import Image from 'next/image';
import { Produto } from '../../types';
import { Container } from './styles';
import { CardProduct } from '../CardProduct';
import loading from '../../../public/images/loading.svg';

interface PropsRenderProductsHome {
  products: Produto[];
  search: string;
}

export function RenderProductsHome({
  products,
  search,
}: PropsRenderProductsHome) {
  if (products.length === 0 && !search) {
    return <Image src={loading} />;
  }

  if (products.length !== 0) {
    return (
      <Container>
        {products.map(item => (
          <CardProduct
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            category={item.category}
          />
        ))}
        ;
      </Container>
    );
  }

  return <p>Produto não encontrado</p>;
}
