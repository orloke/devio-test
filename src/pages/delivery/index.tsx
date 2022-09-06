import Head from 'next/head';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Container } from '../../styles/delivery';

export default function Delivery() {
  const finished = useSelector(
    (state: RootState) => state.productsSlice.finished,
  );
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
          <h3>Preparando:</h3>
          {finished.map(item => (
            <h4 key={item.id}>{item.name}</h4>
          ))}
        </div>
        <div className="requestsFinish">
          <h3>Pronto:</h3>
          {delivery.map(item => (
            <h4 key={item.id}>{item.name}</h4>
          ))}
        </div>
      </Container>
    </>
  );
}
