import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 4,
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
    },
  },
});
