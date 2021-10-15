import React from 'react';
import { CurrentStage } from '../hooks/http.hook';

import { Skeleton } from '../components/skeleton/Skeleton';
import { ErrorMessage } from '../components/errorMessage/ErrorMessage';

type ViewComponent = (...args: any[]) => JSX.Element;

export const setContent = (
  stage: CurrentStage,
  Component: ViewComponent,
  LoadingSkeleton: ViewComponent = Skeleton,
) => {
  switch (stage) {
    case CurrentStage.Loading:
      return <LoadingSkeleton />;
    case CurrentStage.Error:
      return <ErrorMessage />;
    case CurrentStage.Confirmed:
      return <Component />;
    default:
      throw new Error('Unexpected stage');
  }
};
