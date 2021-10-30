/* eslint-disable @next/next/no-img-element */
import styles from './Header.module.css';
import Icon from '@components/Icon';
import React, { useState } from 'react';
  
export default function Header() {
  const toggleResponsive = () => {
    const nav = document.getElementsByTagName('ul');
    nav[0].style.display = nav[0].style.display === 'none' ? 'flex' : 'none';
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/storyflow-logo.svg" alt="logo" width="150" height="50"/>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#">How it works</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Schedule a demo</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">About</a> 
          </li>
        </ul>
      </nav>
      <div className={styles.menu}>
        <a onClick={ toggleResponsive }>
          <Icon type="menu" />
        </a>
      </div>
    </header>
  )
}