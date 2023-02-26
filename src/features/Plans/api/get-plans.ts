import { apiClient } from '@/libs/api-client';
import { useQuery } from '@tanstack/react-query';
import { Plan } from '../types';

type GetPlansOptions = {};

export const getPlans = (): Promise<{
  success: boolean;
  data: Plan[];
}> => {
  return apiClient.get('/plans');
};

export const usePlans = () => {
  const { data, isFetching, isFetched } = useQuery({
    queryKey: ['plans'],
    queryFn: () => getPlans(),
    initialData: { success: false, data: [] },
  });
  return {
    data,
    isLoading: isFetching && !isFetched,
  };
};
