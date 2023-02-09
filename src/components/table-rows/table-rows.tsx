import { TableItem } from '@components/table-item';

import styles from './table-rows.module.css';

type Props = { items: Object[] };

export const TableRows = ({ items }: Props) => {
  return (
    <div className={styles.wrap}>
      {items.map((item, index) => (
        <TableItem key={index} item={item} />
      ))}
    </div>
  );
};
