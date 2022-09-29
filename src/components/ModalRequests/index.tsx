import Image from 'next/image';
import { useMemo, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { formatValue } from '../../helps';
import { RootState } from '../../store';
import { addProductMarket, setChangeModal } from '../../store/products';
import { Aditional } from '../Aditional';
import { Button } from '../Buttons';
import { Observation } from '../Observation';
import { OrderSummary } from '../OrderSummary';
import { DivAdditional, DivModalFooter, DivRequests } from './styles';

export function ModalRequests() {
  const [observation, setObservation] = useState('');
  const [qtd, setQtd] = useState(1);

  const dispatch = useDispatch();

  const additional = useSelector(
    (state: RootState) => state.productsSlice.additional,
  );

  const showModal = useSelector((state: RootState) => state.productsSlice.show);
  const produto = useSelector(
    (state: RootState) => state.productsSlice.product,
  );

  const priceAdditional = useMemo(() => {
    return additional.reduce((a, b) => a + b.price, 0);
  }, [additional]);
  const price = formatValue(produto.price) as string;

  const handleQtd = (operation: string) => {
    if (operation === '+') {
      setQtd(qtd + 1);
    }
    if (operation === '-' && qtd !== 1) {
      setQtd(qtd - 1);
    }
  };

  const handleClose = () => {
    setQtd(1);
    dispatch(setChangeModal(false));
  };

  const handleMarket = () => {
    dispatch(
      addProductMarket({
        product: {
          title: produto.title,
          price: produto.price,
          description: produto.description,
          qtd,
          total: qtd * produto.price + priceAdditional,
          observation,
          id: produto.id,
        },
        additional,
      }),
    );
    setQtd(1);
    setObservation('');
    dispatch(setChangeModal(false));
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Revise seu pedido!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DivRequests>
          <div className="imgRequest">
            <Image
              src={produto.image}
              alt="imagem do pedido"
              width={150}
              height={130}
            />
          </div>
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
        {produto.category === 'hamburger' && (
          <DivAdditional>
            <h4>Adicionais</h4>
            <span>
              Selecione os ingredientes que você quer adicionar no seu lanche
            </span>
            <Aditional
              title="bacon"
              description="100g"
              price={2.0}
              image="/images/bacon.png"
            />
            <Aditional
              title="mussarela"
              description="100g"
              price={3.0}
              image="/images/mussarela.png"
            />
          </DivAdditional>
        )}
        <Observation
          marginBottom={1}
          marginTop={2}
          placeholder="Adicione uma observação ao pedido"
          rows={4}
          readonly={false}
          changeText={observation}
          onchange={setObservation}
        >
          <h4>Observações</h4>
        </Observation>
        <OrderSummary
          title={`${qtd}x ${produto.title}`}
          price={price}
          total={qtd * produto.price + priceAdditional}
          additional={additional}
        />
      </Modal.Body>
      <DivModalFooter>
        <Button
          onclick={() => handleClose()}
          variant="outline"
          text="cancelar"
        />
        <Button
          onclick={() => handleMarket()}
          variant="fill"
          text="Continuar comprando"
          ml={2}
        />
      </DivModalFooter>
    </Modal>
  );
}
