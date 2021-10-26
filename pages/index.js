import Head from 'next/head'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Storyflow.video</title>
        <meta name="description" content="Add a quick video widget to your website." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <header className={styles.header}>
        <p>Story<span>Flow</span></p>
      </header>

      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>

      </footer>
      <Script src="https://vidcom.vercel.app/main.bundle.js" />
    </div>
  )
}
