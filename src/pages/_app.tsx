import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <GlobalStyle />
    </div>
  );
}

export default MyApp;
