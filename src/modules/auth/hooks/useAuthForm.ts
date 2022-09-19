import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
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
    resolver: yupResolver(AuthFormSchema),
    mode: 'all',
  });
  return {handleSubmit, control, isValid, errors};
};
