import { TLocationTypeUnion } from '@shared/api/rm-api/rm-api';
import { createContext, Dispatch } from 'react';

type TContextProps = {
  locationTypes: TLocationTypeUnion[];
  setLocationTypes: Dispatch<React.SetStateAction<TLocationTypeUnion[]>>;
};

const defaultValue: TContextProps = {
  locationTypes: [],
  setLocationTypes: () => {},
};

export const QueryContext = createContext(defaultValue);
