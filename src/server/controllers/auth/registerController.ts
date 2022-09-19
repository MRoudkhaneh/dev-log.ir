import {asyncHandler} from '@/utils/asyncHandler';
import {TNextApi} from '@/types/TApiResult';
import * as yup from 'yup';
import prismaClient from '@/server/prismaClient';
import {HashingPassword} from '@/utils/bcrypt';
import {CreateToken} from '@/utils/jwt';

export const registerValidation = asyncHandler(
  async ({req, res}: TNextApi<null>) => {
    const registerSchema = yup.object({
      username: yup.string().required('اجباریه'),
      password: yup.string().required('اجباریه'),
      email: yup.string().email().required('اجباریه'),
    });
    const validate = await registerSchema.validate(req.body);
    if (!validate) {
      return res.status(400).json({
        isSuccess: false,
        message: 'اطلاعات خساب کاربری درست نمیباشد.',
        data: null,
      });
    }
    return {req, res};
  },
);

export const registerController = asyncHandler(
  async ({req, res}: TNextApi<{accessToken: string; username: string}>) => {
    const {username, password, email} = req.body;
    const user = await prismaClient.user.create({
      data: {
        username,
        password: await HashingPassword(password),
        email,
      },
    });
    const accessToken = CreateToken({
      payload: {id: user.id, username: user.username},
      expireTime: '3d',
    });
    res.status(200).json({
      isSuccess: true,
      message: 'ثبت نام با موفقیت انجام شد.',
      data: {accessToken, username: user.username},
    });
  },
);
