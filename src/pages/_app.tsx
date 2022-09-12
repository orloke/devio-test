import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Header } from '../components/Header';
import { GlobalStyle } from '../styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </Provider>
  );
}

export default MyApp;
