import { useEffect, useRef, useState } from 'react';

import { SelectedItem } from '@components/selected-item';
import { TRmTypesAliases } from '@pages/main/lib/constants/rm-types-aliases';
import { TLocationTypeUnion } from '@shared/api/rm-api/rm-api';
import { useArrowSelect, useOutsideClose } from '@shared/lib';

import styles from './search.module.css';

type Props = {
  isLoading: boolean;
  selectedItems?: TLocationTypeUnion[];
  aliases: TRmTypesAliases;
  resetButtonDisabled: boolean;
  onClickSearchButton: () => void;
  onResetSearch: () => void;
  onSelectItem: (item: TLocationTypeUnion) => void;
  onRemoveItem: (item: TLocationTypeUnion) => void;
};

export const Search = ({
  isLoading,
  selectedItems,
  aliases,
  resetButtonDisabled,
  onClickSearchButton,
  onResetSearch,
  onSelectItem,
  onRemoveItem,
}: Props) => {
  const [filteredAliases, setFilteredAliases] = useState<TLocationTypeUnion[]>(
    []
  );
  const [value, setValue] = useState<string | undefined>();
  const textInput = useRef<any>(null);
  const wrapperPromptsRef = useRef(null);
  useOutsideClose(wrapperPromptsRef, () => setValue(undefined));
  const selectedItem = useArrowSelect(
    textInput,
    filteredAliases,
    onClickSearchButton,
    () => {
      setValue(undefined);
      setFilteredAliases([]);
    },
    onSelectItem,
    selectedItems,
  );

  const onSelectItemHandler = (item: TLocationTypeUnion) => {
    onSelectItem(item);
    setValue('');
    textInput.current?.focus();
  };

  useEffect(() => {
    if (value) {
      const foundedAliases = aliases.filter((alias) =>
        alias.toLowerCase().includes(value.toLowerCase())
      );
      return setFilteredAliases([...foundedAliases]);
    }
    setFilteredAliases([]); // Пересоздание ссылки, чтобы не было "дергающегося" списка
  }, [value]);

  return (
    <>
      <div className={`${styles.wrap} ${isLoading && styles.wrapDisabled}`}>
        {selectedItems?.map((item, index) => (
          <SelectedItem
            disabled={isLoading}
            key={index}
            value={item}
            onRemove={() => onRemoveItem(item)}
          />
        ))}

        <div className={styles.inputArea}>
          <input
            disabled={isLoading}
            value={value || ''}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Search..."
            className={styles.input}
            ref={textInput}
          />
          {value && (
            <div className={styles.prompts} ref={wrapperPromptsRef}>
              {filteredAliases.map((alias, index) =>
                selectedItems?.includes(alias) ? null : (
                  <div
                    key={index}
                    className={`${styles.prompt} ${
                      selectedItem === alias && styles.promptSelected
                    }`}
                    onClick={() => onSelectItemHandler(alias)}
                  >
                    {alias}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
      
      <button
        className={styles.resetButton}
        disabled={isLoading || resetButtonDisabled}
        onClick={onResetSearch}
      >
        Reset
      </button>
      <button
        className={styles.searchButton}
        disabled={selectedItems?.length === 0 || isLoading}
        onClick={onClickSearchButton}
      >
        Search
      </button>
    </>
  );
};
