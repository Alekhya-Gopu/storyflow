/* eslint-disable @next/next/no-img-element */
import styles from './Header.module.css';
import Icon from '@components/Icon';
import Feedback from '@components/Feedback';
import Link from 'next/link';

interface HeaderProps {
  authState?: string;
  email?: string;
}

export default function Header({ authState, email }: HeaderProps) {
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
          <Link href="/" passHref>
            <img src="/storyflow-logo.svg" alt="logo" height="50" />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a target="_blank" rel="noreferrer" href="https://amp.dev/documentation/tools/?format=stories">Tools</a>
            </li>
            <li className={styles.navItem}>
              <a href="https://calendly.com/src200" target="_blank" rel="noreferrer">Schedule a demo</a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.feedbackItem}>Feedback</a>
              <div className={styles.feedbackForm}>
                <Feedback />
              </div>
            </li>
          </ul>
        </nav>
        {authState === 'authenticated' ? (
          <div className={styles.profile}>
            <Link href="/profile">
              <a>
                <img height="45" alt="Avatar" src={`https://robohash.org/${email}`} />
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