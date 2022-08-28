import { CardRequests } from '../../components/CardRequests';
import { Container } from '../../styles/kitchen';

export default function Kitchen() {
  return (
    <Container>
      <div className="requests">
        <h3>Preparando:</h3>
        <CardRequests displayButtonConfirm="block" />
      </div>
      <div className="requestsFinish">
        <h3>Pronto:</h3>
        <CardRequests displayButtonConfirm="none" />
      </div>
    </Container>
  );
}
