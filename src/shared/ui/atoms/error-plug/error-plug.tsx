import loadingErrorImage from '@shared/images/loading-error.png';

import styles from './error-plug.module.css';

type Props = {};

export const ErrorPlug = ({}: Props) => {
  const title = 'Something went wrong.\nRefresh the page or try again later.';
  return (
    <div className={styles.wrap}>
      <img src={loadingErrorImage} height={200} width={200} />
      <p className={styles.title}>{title}</p>
    </div>
  );
};
