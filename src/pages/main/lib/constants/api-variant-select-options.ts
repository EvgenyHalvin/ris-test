import { TApiVariant } from '@pages/main/types';
import { TSelectItem } from '@shared/ui/atoms/select-item/types';

export const apiVariantSelectOptions: Array<TSelectItem<TApiVariant>> = [
  { label: 'Rick and Morty', value: 'RM' },
  { label: 'Breaking Bad', value: 'BB' },
];
