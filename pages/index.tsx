import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@components/Icon';
import Button from '@components/Button';
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
        <Link href="/create" passHref>
          <Button size="large">Get Started <Icon type="arrow-right" /></Button>
        </Link>
      </div>
      <div className={styles.illustration}>
        <Image src="/illustration.svg" alt="Storyflow illustration" width={650} height={400} />
      </div>
    </div>
  )
}

export default Home;
