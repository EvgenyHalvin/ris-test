import { ReactNode } from 'react';

import { Search } from '@components/search';
import { TApiVariant } from '@pages/main/types';
import { TSelectItem } from '@shared/ui/atoms/select-item/types';
import { Select } from '@shared/ui/molecules';

import styles from './filter-line.module.css';

type Props = {
  isLoading: boolean;
  currentApiValue: TApiVariant;
  options: Array<TSelectItem<TApiVariant>>;
  searchSlot: ReactNode;
  onSelectOption: (item: TApiVariant) => void;
};

export const FilterLine = ({
  isLoading,
  currentApiValue,
  options,
  searchSlot,
  onSelectOption,
}: Props) => {
  return (
    <div className={styles.wrap}>
      <Select<TApiVariant>
        disabled={isLoading}
        currentValue={currentApiValue}
        options={options}
        onSelectOption={onSelectOption}
      />
      {searchSlot}
    </div>
  );
};
