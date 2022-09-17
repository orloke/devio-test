import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Header } from '../components/Header';
import { GlobalStyle } from '../styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { store } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </Provider>
  );
}

export default MyApp;
