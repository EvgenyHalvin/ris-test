import { useContext, useEffect } from 'react';

import { Table } from '@components/table';
import { useGetLocations, useGetQuotes } from '@shared/api';
import { QueryContext } from '@shared/model';

import { mapTableColumnNames, mapTableRows } from '../model';
import { TApiVariant } from '../types';
import { TTableVariantData } from './types';

type Props = {
  variant: TApiVariant;
};

export const TableConnector = ({ variant }: Props) => {
  const { locationTypes } = useContext(QueryContext);

  const {
    data: locationData,
    isError: isLocationError,
    isLoading: isLocationLoading,
  } = useGetLocations({
    enabled: variant === 'RM',
    types: locationTypes,
  });

  const {
    data: quotesData,
    isError: isQuotesError,
    isLoading: isQuotesLoading,
  } = useGetQuotes({ enabled: variant === 'BB' });

  const apiData: Record<TApiVariant, TTableVariantData> = {
    RM: {
      columns: mapTableColumnNames(locationData),
      rows: mapTableRows(locationData),
      isError: isLocationError,
      isLoading: isLocationLoading,
    },
    BB: {
      columns: mapTableColumnNames(quotesData),
      rows: mapTableRows(quotesData),
      isError: isQuotesError,
      isLoading: isQuotesLoading,
    },
  };

  return (
    <Table
      columns={apiData[variant].columns}
      rows={apiData[variant].rows}
      isError={apiData[variant].isError}
      isLoading={apiData[variant].isLoading}
    />
  );
};
