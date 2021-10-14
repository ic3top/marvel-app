import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const request = useCallback(async <ResType>(
    url: string,
    method: string = 'GET',
    body = null,
    headers:{[key: string]: string} = { 'Content-Type': 'application/json' },
  ): Promise<ResType> => {
    setLoading(true);
    try {
      const response = await fetch(url, { method, body, headers });
      const data = await response.json();
      if (data.code === 404) {
        throw Error(data.status);
      }
      setLoading(false);

      return data;
    } catch (e) {
      setLoading(false);
      if (e instanceof Error) {
        setError(e.message);
      }
      throw e;
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return {
    loading, request, error, clearError,
  };
};
