import { useEffect, useState } from 'react';

import { TableRows } from '@components/table-rows';
import { TableHeader } from '@components/table-header';
import { TPagination } from '@shared/lib/hooks/use-pagination';
import { sortItems } from '@shared/lib/helpers';
import { ErrorPlug, SpinnerPlug } from '@shared/ui/atoms';
import { Pagination } from '@components/pagination';

import styles from './table.module.css';

type Props = {
  columns: string[];
  rows: Object[];
  isLoading: boolean;
  isError: boolean;
  pagination?: TPagination;
  rowCount?: number;
};

export const Table = ({
  columns,
  rows,
  isLoading,
  isError,
  pagination,
  rowCount,
}: Props) => {
  const [sortedRows, setSortedRows] = useState<Object[]>();

  const onSortHandler = (item: string) => {
    const sortedItems = sortItems(rows, item);
    setSortedRows([...sortedItems]);
  };

  useEffect(() => {
    setSortedRows(undefined); // Необходимо для сброса сортировки после получения новых данных в rows
  }, [rows]);

  const Content = () => {
    if (isLoading) {
      return <SpinnerPlug />;
    }
    if (isError) {
      return <ErrorPlug />;
    }
    if (rows.length === 0) {
      return <div className={styles.noRowsPlug}>The list is empty.</div>;
    }
    return <TableRows items={sortedRows ?? rows} />;
  };

  return (
    <>
      <TableHeader columns={isLoading ? [] : columns} onSort={onSortHandler} />
      <div className={styles.wrap}>
        <Content />
      </div>
      <Pagination pagination={pagination} rowCount={rowCount} />
    </>
  );
};
