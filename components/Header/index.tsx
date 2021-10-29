import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/storyflow-logo.svg" alt="logo" width="150" height="50"/>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#">How it works</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Request a demo</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">About</a> 
          </li>
        </ul>
      </nav>
    </header>
  )
}