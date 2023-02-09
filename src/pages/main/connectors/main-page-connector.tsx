import { useState } from 'react';

import { MainPage } from '../ui';
import { TApiVariant } from '../types';
import { TableConnector, FilterLineConnector } from '.';

export const MainPageConnector = () => {
  const [apiVariant, setApiVariant] = useState<TApiVariant>('RM');

  return (
    <MainPage>
      <FilterLineConnector
        currentApiValue={apiVariant}
        onSelectOption={setApiVariant}
      />
      <TableConnector variant={apiVariant} />
    </MainPage>
  );
};
