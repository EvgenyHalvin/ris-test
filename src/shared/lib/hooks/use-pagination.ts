import { Dispatch, useState } from 'react';
import { INITIAL_PAGINATION_VALUES } from '../constants';

export type TPagination = {
  page: number;
  pageSize: number;
  onChangePage: Dispatch<React.SetStateAction<number>>;
  onChangePageSize: Dispatch<React.SetStateAction<number>>;
};

export const usePagination = (): TPagination => {
  const [page, setPage] = useState(INITIAL_PAGINATION_VALUES.page);
  const [pageSize, setPageSize] = useState(INITIAL_PAGINATION_VALUES.pageSize);

  return {
    page,
    pageSize,
    onChangePage: setPage,
    onChangePageSize: setPageSize,
  };
};
