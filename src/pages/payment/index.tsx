import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { removeProduct, toFinished } from '../../store/products';

export default function Payment() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [changeName, setChangeName] = useState('');
  const market = useSelector((state: RootState) => state.productsSlice.market);

  const teste = (name: string) => {
    if (!name) {
      return;
    }
    dispatch(toFinished({ market, name: changeName }));
    router.push('/kitchen');
    dispatch(removeProduct('removeAll'));
  };

  return (
    <div>
      <input
        type="text"
        value={changeName}
        onChange={e => setChangeName(e.target.value)}
        placeholder="escreva seu nome"
      />
      <button type="button" onClick={() => teste(changeName)}>
        clique aqui
      </button>
    </div>
  );
}
