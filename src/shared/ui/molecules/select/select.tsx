import { useState, MouseEvent, useEffect, useRef } from 'react';

import { SelectItem } from '@shared/ui/atoms';
import { TSelectItem } from '@shared/ui/atoms/select-item/types';
import { IconChevron } from '@shared/ui/icons';
import { useOutsideClose } from '@shared/lib';

import styles from './select.module.css';

type Props<T extends string> = {
  currentValue: T;
  options: Array<TSelectItem<T>>;
  disabled?: boolean;
  onSelectOption: (option: T) => void;
};

export const Select = <T extends string>({
  currentValue,
  options,
  disabled = false,
  onSelectOption,
}: Props<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideClose(wrapperRef, () => setIsOpen(false));

  const currentOption = options.find((item) => item.value === currentValue);
  const label = currentOption?.label ?? 'Api option';
  const iconColor = disabled ? 'rgb(230, 230, 230)' : 'rgb(160, 160, 160)';

  return (
    <div
      ref={wrapperRef}
      className={`${styles.wrap} ${disabled && styles.wrapDisabled}`}
      onClick={() => !disabled && setIsOpen((prev) => !prev)}
    >
      <div className={styles.wrapLabel}>
        {label}
        <IconChevron color={iconColor} />
      </div>
      {isOpen && (
        <div className={styles.selectItems}>
          {options.map((item, index) => (
            <SelectItem<T>
              key={index}
              item={item}
              onClick={(e: MouseEvent<HTMLElement>) => {
                onSelectOption(item.value);
                setIsOpen(false);
                e.stopPropagation();
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
