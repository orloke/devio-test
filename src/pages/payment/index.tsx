import Head from 'next/head';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IoWallet } from 'react-icons/io5';
import { OrderSummaryAll } from '../../components/OrderSummaryAll';
import { TotalRequests } from '../../components/TotalRequests';
import { RootState } from '../../store';
import {
  Container,
  Content,
  InfoClient,
  InfoRequest,
} from '../../styles/payment';
import { ComponentInput } from '../../components/ComponentInput';

export default function Payment() {
  const market = useSelector((state: RootState) => state.productsSlice.market);
  const [nameClient, setNameClient] = useState('');

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
              placeholder="Primeiro nome"
              onChange={setNameClient}
              value={nameClient}
              width="68%"
              marginTop="0"
            >
              <span className="subTitle">Nome do Cliente</span>
            </ComponentInput>
            <ComponentInput
              onChange={setNameClient}
              value={nameClient}
              width="30%"
              marginTop="0"
              placeholder="Ex: 200"
            >
              <span className="subTitle">Código</span>
            </ComponentInput>
          </InfoClient>
        </Content>
      </Container>
    </>
  );
}
