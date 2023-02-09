import { TPagination } from '@shared/lib/hooks/use-pagination';

import styles from './pagination.module.css';

type Props = {
  pagination?: TPagination;
  rowCount?: number;
};

export const Pagination = ({}: Props) => {
  return <div className={styles.wrap}><p className={styles.plugTitle}></p>There could be pagination here</div>;
};
