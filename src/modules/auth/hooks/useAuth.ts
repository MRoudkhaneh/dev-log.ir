import {useState} from 'react';
import {useRouter} from 'next/router';
import {setCookie} from 'cookies-next';
import {useMutation} from 'react-query';

type TFormType = 'login' | 'register';
export const useAuth = () => {
  const {replace} = useRouter();

  //state
  const [formType, setFormType] = useState<TFormType>('login');

  //api
  // const {mutate: loginMutate, isLoading: loginLoading} = useMutation(
  //   'authlogin',
  //   () => console.log('dd'),
  //   {
  //     onSuccess(data) {
  //       setCookie('username', data);
  //       setCookie('accessToken', data);
  //       void replace('dashboard');
  //     },
  //     onError(e) {
  //       console.log((e as Error).message);
  //     },
  //   },
  // );

  //logic
  const onSubmit = (data: {username: string; password: string}) => {
    // loginMutate({
    //   username: data.username,
    //   password: data.password,
    // });
  };

  const handleFormType = (type: TFormType) => {
    setFormType(type);
  };

  return {onSubmit, handleFormType, formType};
};
