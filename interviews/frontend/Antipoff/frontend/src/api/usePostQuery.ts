import axios, { AxiosError } from 'axios';
import { useCallback, useState } from 'react';

export const usePostData = <Response, RequestBody>(endpoint: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Response | undefined>();
  const [error, setError] = useState<AxiosError | undefined>();

  const mutate = useCallback(
    (requestBody: RequestBody) => {
      setIsLoading(true);
      axios
        .post<Response>(import.meta.env.VITE_API_URL + endpoint, requestBody)
        .then((response) => {
          setData(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    },
    [endpoint]
  );

  return {
    data,
    error,
    mutate,
    isLoading,
  };
};
