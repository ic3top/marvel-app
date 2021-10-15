import { useState, useCallback } from 'react';

export enum CurrentStage {
  Error = 'ERROR',
  Confirmed = 'CONFIRMED',
  Loading = 'LOADING',
}

export const useHttp = () => {
  const [stage, setStage] = useState<CurrentStage>(CurrentStage.Loading);

  const request = useCallback(async <ResType>(
    url: string,
    method: string = 'GET',
    body = null,
    headers:{[key: string]: string} = { 'Content-Type': 'application/json' },
  ): Promise<ResType> => {
    setStage(CurrentStage.Loading);

    try {
      const response = await fetch(url, { method, body, headers });
      const data = await response.json();
      if (data.code === 404) {
        throw Error(data.status);
      }

      return data;
    } catch (e) {
      if (e instanceof Error) {
        setStage(CurrentStage.Error);
      }
      throw e;
    }
  }, []);

  const clearError = useCallback(() => {
    setStage(CurrentStage.Loading);
  }, []);

  return {
    request, clearError, stage, setStage,
  };
};
