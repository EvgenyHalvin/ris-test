import { useState } from 'react';

import { ErrorBoundary } from '@components/error-boundary';
import { MainPageConnector } from '@pages/main';
import { LoadingContext } from '@shared/model';
import { QueryContext } from '@shared/model';
import { TLocationTypeUnion } from '@shared/api/rm-api/rm-api';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [locationTypes, setLocationTypes] = useState<TLocationTypeUnion[]>([]);

  return (
    <ErrorBoundary>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <QueryContext.Provider value={{ locationTypes, setLocationTypes }}>
          <MainPageConnector />
        </QueryContext.Provider>
      </LoadingContext.Provider>
    </ErrorBoundary>
  );
};
