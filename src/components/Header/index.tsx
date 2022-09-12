import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '../../../public/images/fastfood-logo.png';
import { DivHeader } from './styles';

export function Header() {
	const { pathname } = useRouter();

	return (
		<DivHeader>
			<div>
				<Link href="/">
					<span>
						<Image src={logo} alt="logo" width={60} height={60} />
					</span>
				</Link>
				<nav>
					<Link href="/">
						<button className={pathname === '/' ? 'active' : ''} type="button">
							Pedidos
						</button>
					</Link>
					<Link href="kitchen">
						<button
							className={pathname === '/kitchen' ? 'active' : ''}
							type="button"
						>
							Cozinha
						</button>
					</Link>
					<Link href="/delivery">
						<button
							className={pathname === '/delivery' ? 'active' : ''}
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
