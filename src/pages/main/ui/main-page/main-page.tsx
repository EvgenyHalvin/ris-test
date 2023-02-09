import { ReactNode } from 'react';

import styles from './main-page.module.css';

type Props = {
  children?: ReactNode;
};

export const MainPage = ({ children }: Props) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
