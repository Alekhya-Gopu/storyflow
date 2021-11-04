import Script from 'next/script';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Image from 'next/image';
import styles from './Layout.module.css';
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <title>Storyflow</title>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          {children}
        </div>
      </main>
      {/* <Footer /> */}
      <div className={styles.tryIt}>
        <Image src="/try-it-out.svg" alt="try it out" width={100} height={100} />
      </div>
      <Script src="https://vidcom.vercel.app/main.bundle.js" />
    </div>
  )
}