import * as yup from 'yup';

export const AuthFormSchema = yup.object({
  username: yup.string().required({message: 'این فیلد اجباری است'}),
  password: yup.string().required({message: 'این فیلد اجباری است'}),
});
