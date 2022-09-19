import {asyncHandler} from '@/utils/asyncHandler';
import {TNextApi} from '@/types/TApiResult';
import prismaClient from '@/server/prismaClient';
import {VerifyPassword} from '@/utils/bcrypt';
import {CreateToken} from '@/utils/jwt';

export const loginController = async ({
  req,
  res,
}: TNextApi<{accessToken: string; username: string}>) => {
  console.log(req);
  const {username, password} = req.body;

  const user = await prismaClient.user.findUnique({
    where: {username},
  });
  if (!user) {
    res.status(404).json({
      message: 'کاربری با این اطلاعات یافت نشد',
      isSuccess: false,
      data: null,
    });
    return;
  }

  const match = await VerifyPassword({
    password,
    hashedPassword: user.password,
  });
  if (!match) {
    res.status(404).json({
      message: 'کاربری با این اطلاعات یافت نشد',
      isSuccess: false,
      data: null,
    });
    return;
  }

  const accessToken = CreateToken({
    payload: {id: user.id, username: user.username},
    expireTime: '3d',
  });

  res.status(200).json({
    isSuccess: true,
    message: 'اطلاعات کاربر با موفقیت دریافت شد.',
    data: {accessToken, username: user.username},
  });
};
