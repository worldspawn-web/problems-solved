import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export const useGetData = <Response, Error = false>(endpoint: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Response | undefined>();
  const [error, setError] = useState<Error | undefined>();

  const refetch = useCallback(() => {
    setIsLoading(true);
    axios
      .get<Response>(import.meta.env.VITE_API_URL + endpoint)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err as Error);
        setIsLoading(false);
      });
  }, [endpoint]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return {
    data,
    error,
    refetch,
    isLoading,
  };
};
