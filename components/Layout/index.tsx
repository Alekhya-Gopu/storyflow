import Script from 'next/script';
import Header from '@components/Header';
import Footer from '@components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Script src="https://vidcom.vercel.app/main.bundle.js" />
    </>
  )
}