import { Fragment } from 'react';

import styles from './table-header.module.css';

type Props = {
  columns: string[];
  onSort: (item: string) => void;
};

export const TableHeader = ({ columns, onSort }: Props) => {
  return (
    <div className={styles.wrap}>
      {columns.map((item, index) => (
        <Fragment key={index}>
          <div className={styles.headerItem} onClick={() => onSort(item)}>
            {item}
          </div>
        </Fragment>
      ))}
    </div>
  );
};
