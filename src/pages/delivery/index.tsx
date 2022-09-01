import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Container } from '../../styles/delivery';

export default function Kitchen() {
  const finished = useSelector(
    (state: RootState) => state.productsSlice.finished,
  );
  const delivery = useSelector(
    (state: RootState) => state.productsSlice.delivery,
  );
  return (
    <Container>
      <div className="requests">
        <h1>Preparando:</h1>
        {finished.map(item => (
          <h4 key={item.id}>{item.name}</h4>
        ))}
      </div>
      <div className="requestsFinish">
        <h1>Pronto:</h1>
        {delivery.map(item => (
          <h4 key={item.id}>{item.name}</h4>
        ))}
      </div>
    </Container>
  );
}
