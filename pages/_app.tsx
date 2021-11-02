import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@components/Layout';
import { UserProvider } from '@firebase/FirebaseContext';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}

export default MyApp
