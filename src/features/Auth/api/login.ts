import { apiClient } from '@/libs/api-client';
import { queryClient } from '@/libs/react-query';
import { useMutation } from '@tanstack/react-query';
import { AuthUser, LoginData } from '../types';

export const login = (
  data: LoginData
): Promise<AuthUser> => {
  console.log(data);
  return apiClient.post('/auth/login', data);
};

type UseLoginOptions = {
  onSuccess?: (user: AuthUser) => void;
};

export const useLogin = ({
  onSuccess,
}: UseLoginOptions = {}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: ({ token, role, success }) => {
      queryClient.setQueryData(['auth-user'], { token });
      onSuccess?.({ token, role, success });
    },
  });
  return {
    submit,
    isLoading,
  };
};
