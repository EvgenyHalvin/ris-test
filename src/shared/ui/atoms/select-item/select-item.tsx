import { MouseEvent } from 'react';

import styles from './select-item.module.css';
import { TSelectItem } from './types';

type Props<T extends string> = {
  item: TSelectItem<T>;
  onClick: (e: MouseEvent<HTMLElement>) => void;
};

export const SelectItem = <T extends string>({ item, onClick }: Props<T>) => {
  return (
    <div className={styles.wrap} onClick={onClick}>
      {item.label}
    </div>
  );
};
