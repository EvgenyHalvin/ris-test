import { MutableRefObject, useEffect, useState } from 'react';

export const useArrowSelect = <T extends string>(
  ref: MutableRefObject<any>,
  items: T[],
  onSearch: () => void,
  setter: (item: T) => void,
  onSelect: (item: T) => void,
  selectedItems?: T[]
) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const allowableItems = items.filter(
    (item) => !selectedItems || !selectedItems.includes(item)
  );

  useEffect(() => {
    const handleArrowKeys = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        const isFirst = allowableItems.length === 0 || selectedIndex === 0;
        if (!isFirst) {
          setSelectedIndex((prev) => prev - 1);
        }
      }

      if (e.key === 'ArrowDown') {
        const isLast = selectedIndex >= allowableItems.length - 1;
        if (!isLast) {
          setSelectedIndex((prev) => prev + 1);
        }
      }

      if (e.key === 'Enter') {
        if (allowableItems.length === 0) {
          if (selectedItems && selectedItems.length !== 0) {
            onSearch();
          }
        } else {
          setter(allowableItems[selectedIndex]);
          onSelect(allowableItems[selectedIndex]);
          setSelectedIndex(0);
        }
      }
    };

    document.addEventListener('keydown', handleArrowKeys);

    return () => {
      document.removeEventListener('keydown', handleArrowKeys);
    };
  }, [ref, items, selectedIndex, selectedItems, onSelect, setter]);

  return allowableItems[selectedIndex];
};
