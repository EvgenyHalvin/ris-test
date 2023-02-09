import { TLocationTypeUnion } from '@shared/api/rm-api/rm-api';
import { IconCloseCircle } from '@shared/ui/icons';

import styles from './selected-item.module.css';

type Props = {
  disabled: boolean;
  value: TLocationTypeUnion;
  onRemove: () => void;
};

export const SelectedItem = ({ disabled, value, onRemove }: Props) => {
  return (
    <div className={`${styles.wrap} ${disabled && styles.wrapDisabled}`}>
      {value}
      <div className={`${styles.icon} ${disabled && styles.iconDisabled}`} onClick={() => !disabled && onRemove()}>
        <IconCloseCircle />
      </div>
    </div>
  );
};
