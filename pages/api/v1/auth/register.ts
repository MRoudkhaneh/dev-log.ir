import {NextApiRequest, NextApiResponse} from 'next';
import {Router} from '@/server/router';
import prismaClient from '@/server/prismaClient';
import {HashingPassword} from '@/utils/bcrypt';
import {Pipe} from '@/utils/pipe';
import * as yup from 'yup';
import {CreateToken} from '@/utils/jwt';
type TNextApi = {
  req: NextApiRequest;
  res: NextApiResponse;
};
export const registerValidation = async ({req, res}: TNextApi) => {
  const registerSchema = yup.object({
    username: yup.string(),
    password: yup.string(),
    email: yup.string().email(),
  });
  const validate = await registerSchema.validate(req.body);
  if (!validate) {
    return res.status(400).json('ریدی');
  }
  return {req, res};
};

export const registerController = async ({req, res}: TNextApi) => {
  const {username, password, email} = req.body;
  try {
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

    res.status(200).json({accessToken, username: user.username});
  } catch (err) {
    res.status(400).json({
      message: (err as Error).message,
    });
  }
};

export default Router.post(async (req: NextApiRequest, res: NextApiResponse) =>
  Pipe(
    registerValidation,
    registerController,
  )({
    req,
    res,
  }),
);
