import React, { FC } from 'react';
import styles from './footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <a
        href='https://github.com/gerardogaravito/graph-exercise'
        target='_blank'
        rel='noopener noreferrer'
      >
        Repo to this project
      </a>
    </footer>
  );
};

export default Footer;
