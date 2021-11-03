import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '@styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1>
          <p>Immersive <span>storytelling</span></p>
          <p>redefined for web<span>.</span></p>
        </h1>
        <h3>
          <p>Web stories is a way to reach a unique audience
            within a new storytelling experience.</p>
        </h3>
      </div>
      <div className={styles.illustration}>
        <Image src="/illustration.svg" alt="Storyflow illustration" width={650} height={400} />
      </div>
    </div>
  )
}

export default Home;
