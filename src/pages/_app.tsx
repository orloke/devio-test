import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { GlobalStyle } from '../styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </div>
  );
}

export default MyApp;
