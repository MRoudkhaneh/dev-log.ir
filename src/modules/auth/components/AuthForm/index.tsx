import {
  Anchor,
  Button,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import {Controller} from 'react-hook-form';
import {useAuthForm} from '../../hooks/useAuthForm';

type TAuthForm = {
  onSubmit: (data: {username: string; password: string}) => void;
  formType: 'register' | 'login';
  handleFormType: (type: 'register' | 'login') => void;
  formLoading: boolean;
};

export const AuthForm = ({
  onSubmit,
  formType,
  handleFormType,
  formLoading,
}: TAuthForm) => {
  const {errors, control, isValid, handleSubmit} = useAuthForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text mb="lg">
        {formType === 'login' ? 'ورود به حساب کاربری' : 'ایجاد حساب کاربری'}
      </Text>
      <Stack spacing="lg">
        <Controller
          name={'username'}
          control={control}
          render={({field}) => (
            <TextInput
              label="نام کاربری"
              placeholder="نام کاربری خود را وارد کنید"
              value={field.value}
              onChange={field.onChange}
              error={errors.username?.message}
            />
          )}
        />

        <Controller
          name={'password'}
          control={control}
          render={({field}) => (
            <PasswordInput
              label="رمز عبور"
              placeholder="رمز عبور خود را وارد کنید"
              value={field.value}
              onChange={field.onChange}
              error={errors.password?.message}
            />
          )}
        />

        <Button type="submit" disabled={!isValid} loading={formLoading}>
          {formType === 'login' ? 'ورود به حساب کاربری' : 'ایجاد حساب کاربری'}
        </Button>
        <Anchor
          component="button"
          type="button"
          color="dimmed"
          onClick={() =>
            handleFormType(formType === 'login' ? 'register' : 'login')
          }
          size="xs"
        >
          {formType === 'login'
            ? 'عضو نیستید؟ ثبت نام کنید'
            : 'قبلا عضو شده‌اید؟ رفتن به صفحه ورود'}
        </Anchor>
      </Stack>
    </form>
  );
};
