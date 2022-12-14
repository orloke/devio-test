import Head from 'next/head';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Container } from '../../styles/delivery';

export default function Delivery() {
  const delivery = useSelector(
    (state: RootState) => state.productsSlice.delivery,
  );
  return (
    <>
      <Head>
        <title>Delivery</title>
      </Head>
      <Container>
        <div className="requests">
          <h3>Esperando:</h3>
          {delivery.map(item => (
            <h4 key={item.id}>{item.name}</h4>
          ))}
        </div>
        <div className="requestsFinish">
          <h3>Retirado:</h3>
        </div>
      </Container>
    </>
  );
}
