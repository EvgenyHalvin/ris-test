import { useContext, useEffect, useState } from 'react';

import { LoadingContext } from '@shared/model';

import { rmApi } from '..';
import { TLocationTypeUnion } from '../rm-api';

type TArgs = {
  enabled: boolean;
  types?: TLocationTypeUnion[];
};

export const useGetLocations = ({ enabled, types }: TArgs) => {
  const [data, setData] = useState<any[]>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    setIsLoading(true);
    setLoading(true);
    if (types && types.length > 0) {
      setData(undefined);
      return types.forEach((type, index) => {
        const isLast = index === types.length - 1;
        rmApi
          .getLocations({ type })
          .then(({ data }) => {
            setData((prev) =>
              prev ? [...prev, ...data?.results] : [...data?.results]
            );
          })
          .catch(() => {
            setIsError(true);
          })
          .finally(() =>
            setTimeout(() => {
              isLast && setIsLoading(false);
              isLast && setLoading(false);
            }, 1000)
          );
      });
    }
    rmApi
      .getLocations()
      .then(({ data }) => {
        setData(data?.results);
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
  }, [enabled, types]);

  return { data, isError, isLoading };
};
