import { queryClient } from '@/libs/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({
  children,
}: AppProviderProps) => {
  return (
    <ErrorBoundary
      fallback={<div>Something went wrong!</div>}
      onError={console.error}
    >
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
