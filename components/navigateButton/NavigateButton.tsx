import React, { FC } from 'react';
import styles from './navigateButton.module.scss';
import Link from 'next/link';

interface INavigateButton {
  text: string;
  to: string;
}

const NavigateButton: FC<INavigateButton> = ({ text, to }) => {
  return (
    <Link className={styles.navigate} href={to}>
      {text}
    </Link>
  );
};

export default NavigateButton;
