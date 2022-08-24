import { CardRequests } from '../../components/CardRequests';
import { Observation } from '../../components/Observation';
import { Container } from '../../styles/kitchen';

export default function Kitchen() {
  return (
    <Container>
      <div className="requests">
        <h3>Preparando:</h3>
        <CardRequests displayButtonConfirm="block" />
        <Observation
          marginTop={1}
          marginBottom={1}
          rows={4}
          placeholder="Ex: retire a cebola"
        >
          <h6>Observações do pedido</h6>
        </Observation>
      </div>
      <div className="requestsFinish">
        <h3>Pronto:</h3>
        <CardRequests displayButtonConfirm="none" />
      </div>
    </Container>
  );
}
