import Head from 'next/head';
import { useState } from 'react';
import { toast } from 'react-toastify';
import router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { IoWallet } from 'react-icons/io5';
import { AiFillCreditCard } from 'react-icons/ai';
import { BiCreditCardFront } from 'react-icons/bi';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { OrderSummaryAll } from '../../components/OrderSummaryAll';
import { TotalRequests } from '../../components/TotalRequests';
import { RootState } from '../../store';
import {
  Container,
  Main,
  InfoClient,
  InfoRequest,
  Content,
  DivButtons,
} from '../../styles/payment';
import { ComponentInput } from '../../components/ComponentInput';
import PaymentMethod from '../../components/PaymentMethod';
import { Button } from '../../components/Buttons';
import { addForPayment, deleteProductMarket } from '../../store/products';

export default function Payment() {
  const [nameClient, setNameClient] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const dispatch = useDispatch();

  const market = useSelector((state: RootState) => state.productsSlice.market);

  const cancelRequest = () => {
    dispatch(deleteProductMarket('removeAll'));
    router.push('/');
    return toast.success('Seu pedido foi cancelado. Faça um novo pedido!');
  };

  const handleConfirmPayment = () => {
    if (nameClient && paymentType) {
      dispatch(addForPayment({ market, name: nameClient }));
      dispatch(deleteProductMarket('removeAll'));
      router.push('/kitchen');
      return toast.success('Pedido realizado com sucesso!');
    }
    return toast.warning('Escreva seu nome e escolha a forma de pagamento!');
  };

  return (
    <>
      <Head>
        <title>Pagamento</title>
      </Head>
      <Container>
        <div className="title">
          <IoWallet color="green" size={30} />
          <h3>Pagamento</h3>
        </div>
        <Content>
          <Main width="45%">
            <span className="subTitle">Resumo da compra</span>
            <InfoRequest>
              {market.map(item => (
                <OrderSummaryAll
                  key={item.id}
                  title={item.product.title}
                  additional={item.additional}
                  price={item.product.price}
                  id={item.id}
                  qtd={item.product.qtd}
                />
              ))}
              <TotalRequests market={market} />
            </InfoRequest>
            <InfoClient>
              <ComponentInput
                type="text"
                placeholder="Obrigatório escrever o nome para continuar"
                onChange={setNameClient}
                value={nameClient}
                width="74%"
                marginTop="0"
              >
                <span className="subTitle">Nome do Cliente</span>
              </ComponentInput>
              <ComponentInput
                type="number"
                width="20%"
                marginTop="0"
                placeholder="Ex: 200"
              >
                <span className="subTitle">Código</span>
              </ComponentInput>
            </InfoClient>
          </Main>
          <Main width="30%">
            <span className="subTitle">Selecione a forma de pagamento</span>
            <PaymentMethod
              paymentType={setPaymentType}
              id="Débito"
              icon={<AiFillCreditCard color="green" />}
              nameMethod="Débito"
            />
            <PaymentMethod
              paymentType={setPaymentType}
              id="Crédito"
              icon={<BiCreditCardFront color="green" />}
              nameMethod="Crédito"
            />
            <PaymentMethod
              paymentType={setPaymentType}
              id="Pix"
              icon={<FaRegMoneyBillAlt color="green" />}
              nameMethod="Pix"
            />
          </Main>
        </Content>
        <DivButtons>
          <Button
            variant="outline"
            text="cancelar"
            onclick={() => cancelRequest()}
          />
          <Button
            variant="fill"
            text="Pagar"
            ml={2}
            onclick={handleConfirmPayment}
          />
        </DivButtons>
      </Container>
    </>
  );
}
