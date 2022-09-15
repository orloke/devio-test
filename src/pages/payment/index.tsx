import Head from 'next/head';
import { useState } from 'react';
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
import { deleteProductMarket } from '../../store/products';

export default function Payment() {
  const [nameClient, setNameClient] = useState('');
  const dispatch = useDispatch();

  const market = useSelector((state: RootState) => state.productsSlice.market);
  const cancelRequest = () => {
    dispatch(deleteProductMarket('removeAll'));
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
                  id={item.product.id}
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
              icon={<AiFillCreditCard color="green" />}
              nameMethod="Débito"
            />
            <PaymentMethod
              icon={<BiCreditCardFront color="green" />}
              nameMethod="Crédito"
            />
            <PaymentMethod
              icon={<FaRegMoneyBillAlt color="green" />}
              nameMethod="Dinheiro"
            />
            <InfoClient>
              <ComponentInput
                type="number"
                placeholder="Valor entregue"
                width="68%"
                marginTop="0"
              >
                <span className="subTitle">Valor entregue</span>
              </ComponentInput>
              <ComponentInput
                type="number"
                width="30%"
                marginTop="0"
                placeholder="R$ 0,00"
              >
                <span className="subTitle">Troco</span>
              </ComponentInput>
            </InfoClient>
          </Main>
        </Content>
        <DivButtons>
          <Button
            disabled={nameClient.length === 0}
            variant="outline"
            text="cancelar"
            onclick={() => cancelRequest()}
          />
          <Button
            disabled={nameClient.length === 0}
            variant="fill"
            text="Continuar para pagamento"
            ml={2}
            onclick={() => router.push('/kitchen')}
          />
        </DivButtons>
      </Container>
    </>
  );
}
