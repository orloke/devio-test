import { Container } from '../../styles/delivery';

export default function Kitchen() {
  return (
    <Container>
      <div className="requests">
        <h1>Preparando:</h1>
        <h4>Ricardo</h4>
        <h4>Camila</h4>
        <h4>Fernando</h4>
        <h4>Pedro</h4>
      </div>
      <div className="requestsFinish">
        <h1>Pronto:</h1>

        <h4>Camila</h4>
      </div>
    </Container>
  );
}
