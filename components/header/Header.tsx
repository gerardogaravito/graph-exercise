import React, { FC } from 'react';
import styles from './header.module.scss';

const Header: FC = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Graph Exercise</h1>

      <h2 className={styles.subtitle}>
        Developed by{' '}
        <a
          href='https://gerardogaravito.vercel.app/'
          target='_blank'
          rel='noreferrer'
        >
          Gerardo Garavito
        </a>
      </h2>
    </main>
  );
};

export default Header;
