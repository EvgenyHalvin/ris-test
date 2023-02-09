import { useContext, useEffect, useState } from 'react';

import { Search } from '@components/search';
import { TLocationTypeUnion } from '@shared/api/rm-api/rm-api';
import { QueryContext } from '@shared/model';

import { rmTypesAliases } from '../lib';

type Props = {
  isLoading: boolean;
};

export const SearchConnector = ({ isLoading }: Props) => {
  const [selectedItems, setSelectedItems] = useState<TLocationTypeUnion[]>([]);
  const { locationTypes, setLocationTypes } = useContext(QueryContext);

  const onSelectItemHandler = (item: TLocationTypeUnion) => {
    setSelectedItems((prev) => [...prev, item]);
  };

  const onRemoveItemHandler = (item: TLocationTypeUnion) => {
    const filteredItems = selectedItems.filter(
      (selectedItem) => selectedItem !== item
    );
    setSelectedItems([...filteredItems]);
  };

  const onResetSearchHandler = () => {
    if (selectedItems.length > 0 && locationTypes.length === 0) {
      return setSelectedItems([]);
    }
    setSelectedItems([]);
    setLocationTypes([]);
  };

  return (
    <Search
      isLoading={isLoading}
      selectedItems={selectedItems}
      aliases={rmTypesAliases}
      resetButtonDisabled={locationTypes.length === 0 && selectedItems.length === 0}
      onClickSearchButton={() => setLocationTypes([...selectedItems])}
      onSelectItem={onSelectItemHandler}
      onRemoveItem={onRemoveItemHandler}
      onResetSearch={onResetSearchHandler}
    />
  );
};
