import { createContext, Dispatch } from 'react';

type TContextProps = {
  loading: boolean;
  setLoading: Dispatch<React.SetStateAction<boolean>>;
};

const defaultValue: TContextProps = {
  loading: false,
  setLoading: () => {},
};

export const LoadingContext = createContext(defaultValue);
