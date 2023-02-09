import { useContext, useEffect, useState } from 'react';

import { LoadingContext } from '@shared/model';

import { bbApi } from '..';

type TArgs = {
  enabled: boolean;
};

export const useGetQuotes = ({ enabled }: TArgs) => {
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    setIsLoading(true);
    setLoading(true);
    bbApi
      .getQuotes()
      .then(({ data }) => {
        setData(data?.data); //TODO: нужно достучаться до апишки, хз что там в респонсе
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() =>
        setTimeout(() => {
          setIsLoading(false);
          setLoading(false);
        }, 1000)
      );
  }, [enabled]);

  return { data, isError, isLoading };
};
