import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {AuthFormSchema} from '../components/AuthForm/authForm.schema';

export const useAuthForm = () => {
  const {
    handleSubmit,
    control,
    formState: {isValid, errors},
  } = useForm<{username: string; password: string}>({
    defaultValues: {
      password: '',
      username: '',
    },
    resolver: zodResolver(AuthFormSchema),
    mode: 'all',
  });
  return {handleSubmit, control, isValid, errors};
};
