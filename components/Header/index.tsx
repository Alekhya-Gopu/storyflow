/* eslint-disable @next/next/no-img-element */
import styles from './Header.module.css';
import Icon from '@components/Icon';
import Link from 'next/link';

interface HeaderProps {
  authState?: string;
}

export default function Header({ authState }: HeaderProps) {
  const toggleResponsive = () => {
    const nav = document.getElementsByTagName('ul');
    if (!nav[0].style.display) {
      nav[0].style.display = 'flex';
    } else {
      nav[0].style.display = nav[0].style.display === 'none' ? 'flex' : 'none';
    }
  };

  return (
    <>
      <div className={styles.topLine}></div>
      <header className={styles.header}>
        <div className={styles.menu}>
          <a onClick={toggleResponsive}>
            <Icon type="menu" />
          </a>
        </div>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <img src="/storyflow-logo.svg" alt="logo" width="150" height="50" />
            </a>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">
                <a>How it works</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <a href="https://calendly.com/src200" target="_blank" rel="noreferrer">Schedule a demo</a>
            </li>
            <li className={styles.navItem}>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
        {authState === 'authenticated' ? (
          <div className={styles.auth}>
            <Link href="/profile">
              <a>
                <Icon type="user" />
              </a>
            </Link>
          </div>) : (
          <div className={styles.login}>
            <Link href="/login">
              Login
            </Link>
          </div>
        )}
      </header>
    </>
  )
}