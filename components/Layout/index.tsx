import Script from 'next/script';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Script src="https://vidcom.vercel.app/main.bundle.js" />
    </>
  )
}