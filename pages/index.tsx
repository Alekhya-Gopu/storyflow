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
          Add Interactive <span>Web Stories </span>
          to your website with few bytes of JavaScript<span>.</span>
        </h1>
        <p>
          Web stories is a way to reach a unique audience
          within a new storytelling experience.
          Storyflow integration supercharges your user experience with a floating stories widget.
        </p>
        <Link href="/stories" passHref>
          <Button size="large">Try for Free <Icon type="arrow-right" /></Button>
        </Link>
      </div>
      <div className={styles.illustration}>
        <Image src="/illustration.svg" alt="Storyflow illustration" width={650} height={400} />
      </div>
    </div>
  )
}

export default Home;
