import React, { FC } from 'react';
import styles from './navigateButton.module.scss';
import Link from 'next/link';
import { INavigateButton } from './navigateButton.types';

const NavigateButton: FC<INavigateButton> = ({ text, to }) => {
  return (
    <Link className={styles.navigate} href={to}>
      {text}
    </Link>
  );
};

export default NavigateButton;
