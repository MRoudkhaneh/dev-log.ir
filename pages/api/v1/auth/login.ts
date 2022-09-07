import {Router} from '@/server/router';
import {NextApiRequest, NextApiResponse} from 'next';
import prismaClient from '@/server/prismaClient';
import {VerifyPassword} from '@/utils/bcrypt';
import {CreateToken} from '@/utils/jwt';

export default Router.post(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const {username, password} = req.body;

    const user = await prismaClient.user.findUnique({
      where: {username},
    });
    if (!user) {
      res
        .status(404)
        .json({message: 'کاربری با این اطلاعات یافت نشد', code: 404, data: []});
      return;
    }

    const match = await VerifyPassword({
      password,
      hashedPassword: user.password,
    });
    if (!match) {
      res
        .status(404)
        .json({message: 'کاربری با این اطلاعات یافت نشد', code: 404, data: []});
      return;
    }

    const accessToken = CreateToken({
      payload: {id: user.id, username: user.username},
      expireTime: '3d',
    });
    res.status(200).json({
      message: '',
      code: 200,
      data: {accessToken, username: user.username},
    });
  },
);
