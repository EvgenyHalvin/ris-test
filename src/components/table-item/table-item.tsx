import { Fragment } from 'react';

import styles from './table-item.module.css';

type Props = {
  item: Object;
};

export const TableItem = ({ item }: Props) => {
  const values = Object.values(item);

  return (
    <div className={styles.wrap}>
      {values.map((item, index) => (
        <Fragment key={index}>
          <div className={styles.tableItem}>{item}</div>
        </Fragment>
      ))}
    </div>
  );
};
