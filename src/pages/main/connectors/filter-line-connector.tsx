import { useContext } from 'react';

import { FilterLine } from '@components/filter-line';
import { LoadingContext } from '@shared/model';

import { TApiVariant } from '../types';
import { apiVariantSelectOptions } from '../lib';
import { SearchConnector } from '.';

type Props = {
  currentApiValue: TApiVariant;
  onSelectOption: (item: TApiVariant) => void;
};

export const FilterLineConnector = ({
  currentApiValue,
  onSelectOption,
}: Props) => {
  const { loading } = useContext(LoadingContext);

  return (
    <FilterLine
      isLoading={loading}
      currentApiValue={currentApiValue}
      options={apiVariantSelectOptions}
      onSelectOption={onSelectOption}
      searchSlot={currentApiValue === 'RM' && <SearchConnector isLoading={loading} />}
    />
  );
};
