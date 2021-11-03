/* eslint-disable @next/next/no-img-element */
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      &copy; 2021 &nbsp; | &nbsp; <img src="/storyflow-logo.svg" alt="logo" width="80" height="25" />
    </footer>
  )
}