import Head from 'next/head';
import { useSelector } from 'react-redux';
import { OrderSummaryAll } from '../../components/OrderSummaryAll';
import TotalRequests from '../../components/TotalRequests';
import { RootState } from '../../store';

import { Container, InfoRequest } from '../../styles/payment';

export default function Payment() {
  const market = useSelector((state: RootState) => state.productsSlice.market);

  return (
    <>
      <Head>
        <title>Pagamento</title>
      </Head>
      <Container>
        <InfoRequest>
          {market.map(item => (
            <OrderSummaryAll
              key={item.id}
              title={item.product.title}
              additional={item.additional}
              price={item.product.price}
              id={item.product.id}
              qtd={item.product.qtd}
            />
          ))}
          <TotalRequests market={market} />
        </InfoRequest>
      </Container>
    </>
  );
}
