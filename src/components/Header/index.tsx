import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { DivHeader } from './styles';
import logo from '../../../public/images/fastfood-logo.png';

export function Header() {
  const [clickButton, setClickButton] = useState('');

  return (
    <DivHeader>
      <div>
        <Image src={logo} alt="logo" width={60} height={60} />
        <nav>
          <Link href="/">
            <button
              className={clickButton === 'pedido' ? 'active' : ''}
              onClick={() => setClickButton('pedido')}
              type="button"
            >
              Pedidos
            </button>
          </Link>
          <Link href="/">
            <button
              onClick={() => setClickButton('cozinha')}
              className={clickButton === 'cozinha' ? 'active' : ''}
              type="button"
            >
              Cozinha
            </button>
          </Link>
          <Link href="/">
            <button
              onClick={() => setClickButton('retirada')}
              className={clickButton === 'retirada' ? 'active' : ''}
              type="button"
            >
              Retirada
            </button>
          </Link>
        </nav>
      </div>
    </DivHeader>
  );
}
