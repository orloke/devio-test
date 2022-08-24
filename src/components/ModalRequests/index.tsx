import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Aditional } from '../Aditional';
import { Button } from '../Buttons';
import { Observation } from '../Observation';
import { OrderSummary } from '../OrderSummary';
import { DivAdditional, DivRequests } from './styles';

export function ModalRequests() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button type="button" onClick={handleShow}>
        Launch static backdrop modal
      </button>

      <Modal show={show} onHide={handleClose}>
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
              <h6>Smash da casa</h6>
              <span>
                2x hamburguer 200g, queijo cheddar, tomate, alface, picles,
                cebola, molho da casa
              </span>
              <div className="divButton">
                <button type="button">+</button>
                <span>qtd</span>
                <button type="button">-</button>
              </div>
            </div>
            <p className="total">R$ 30,50</p>
          </DivRequests>
          <DivAdditional>
            <h4>Adicionais</h4>
            <span>
              Selecione os ingredientes que você quer adicionar a mais no seu
              lanche
            </span>
            <Aditional />
            <Aditional />
            <Aditional />
          </DivAdditional>
          <Observation
            marginBottom={1}
            marginTop={1}
            placeholder="Adicione uma observação ao pedido"
            rows={4}
          >
            <h4>Observações</h4>
          </Observation>
          <OrderSummary />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline" text="cancelar" />
          <Button variant="fill" text="Finalizar pedido" ml={2} />
        </Modal.Footer>
      </Modal>
    </>
  );
}
