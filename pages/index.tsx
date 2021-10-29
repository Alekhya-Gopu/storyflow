import type { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '@components/Header';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
     <Head>
        <title>Storyflow</title>
        <meta name="description" content="Add a quick video widget to your website." />
        <link rel="icon" href="/storyflow-favicon.svg" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>
            <p>Immersive <span>storytelling</span></p>
            <p>redefined for web<span>.</span></p>
          </h1>
          <h3>
            <p>Web stories is a way to reach a unique audience</p>
            <p>within a new storytelling experience.</p>
          </h3>
        </div>
        <div className={styles.illustration}>
          <Image src="/illustration.svg" alt="Storyflow illustration" width={650} height={400} />
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
      <Script src="https://vidcom.vercel.app/main.bundle.js" />
    </div>
  )
}

export default Home
