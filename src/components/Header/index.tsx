import Image from 'next/image';
import Link from 'next/link';
import { DivHeader } from './styles';
import logo from '../../../public/images/fastfood-logo.png';

export function Header() {
  return (
    <DivHeader>
      <div>
        <Image src={logo} alt="logo" width={60} height={60} />
        <nav>
          <Link href="/">
            <button type="button">Pedidos</button>
          </Link>
          <Link href="/">
            <button type="button">Cozinha</button>
          </Link>
          <Link href="/">
            <button type="button">Retirada</button>
          </Link>
        </nav>
      </div>
    </DivHeader>
  );
}
