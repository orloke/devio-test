import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { formatValue } from '../../helps';
import { RootState } from '../../store';
import { setModal } from '../../store/products';
import { Aditional } from '../Aditional';
import { Button } from '../Buttons';
import { Observation } from '../Observation';
import { OrderSummary } from '../OrderSummary';
import { DivAdditional, DivRequests } from './styles';

export function ModalRequests() {
  const dispatch = useDispatch();
  const additional = useSelector(
    (state: RootState) => state.productsSlice.additional,
  );
  const [qtd, setQtd] = useState(1);

  const handleQtd = (operation: string) => {
    if (operation === '+') {
      setQtd(qtd + 1);
    }
    if (operation === '-' && qtd !== 1) {
      setQtd(qtd - 1);
    }
  };

  const showModal = useSelector((state: RootState) => state.productsSlice.show);

  const produto = useSelector(
    (state: RootState) => state.productsSlice.product,
  );

  const price = formatValue(produto.price);

  const handleClose = () => dispatch(setModal(false));

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Revise seu pedido!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DivRequests>
          <img
            className="imgRequest"
            src="/images/hamburguer.jpg"
            alt="imagem do pedido"
          />
          <div className="descriptionRequest">
            <h6>{produto.title}</h6>
            <span>{produto.description}</span>
            <div className="divButton">
              <button onClick={() => handleQtd('-')} type="button">
                -
              </button>
              <span>{qtd}</span>
              <button onClick={() => handleQtd('+')} type="button">
                +
              </button>
            </div>
          </div>
          <p className="total">{price}</p>
        </DivRequests>
        <DivAdditional>
          <h4>Adicionais</h4>
          <span>
            Selecione os ingredientes que você quer adicionar a mais no seu
            lanche
          </span>
          <Aditional title="bacon" description="100g" price={2.0} />
          <Aditional title="mussarela" description="100g" price={3.0} />
        </DivAdditional>
        <Observation
          marginBottom={1}
          marginTop={1}
          placeholder="Adicione uma observação ao pedido"
          rows={4}
        >
          <h4>Observações</h4>
        </Observation>
        <OrderSummary
          title={produto.title}
          price={price}
          total={qtd * produto.price + additional.price}
          additional={additional}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline" text="cancelar" />
        <Button variant="fill" text="Finalizar pedido" ml={2} />
      </Modal.Footer>
    </Modal>
  );
}
