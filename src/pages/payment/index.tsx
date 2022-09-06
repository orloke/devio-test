import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/Buttons';
import { RootState } from '../../store';
import { removeProduct, toFinished } from '../../store/products';
import { Container } from '../../styles/payment';

export default function Payment() {
  const router = useRouter();
  const dispatch = useDispatch();
  const market = useSelector((state: RootState) => state.productsSlice.market);

  const [changeName, setChangeName] = useState('');
  const [inputErro, setinputErro] = useState(false);

  const handleName = (name: string) => {
    if (!name) {
      setinputErro(true);
      return;
    }
    dispatch(toFinished({ market, name: changeName }));
    router.push('/kitchen');
    dispatch(removeProduct('removeAll'));
    setinputErro(false);
  };

  return (
    <>
      <Head>
        <title>Pagamento</title>
      </Head>
      <Container error={inputErro}>
        <input
          type="text"
          value={changeName}
          onChange={e => setChangeName(e.target.value)}
          placeholder="escreva seu nome"
        />
        <Button
          disabled={changeName.length === 0}
          text="Confirmar"
          onclick={() => handleName(changeName)}
        />
      </Container>
    </>
  );
}
