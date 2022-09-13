import {Router} from '@/server/router';
import {asyncHandler} from '@/utils/asyncHandler';
import {NextApiRequest, NextApiResponse} from 'next';
import {NextHandler} from 'next-connect';
import {VerifyToken} from '@/utils/jwt';
import prismaClient from '@/server/prismaClient';

export default Router.use(
  asyncHandler(
    async (
      req: NextApiRequest & {},
      res: NextApiResponse,
      next: NextHandler,
    ) => {
      if (req.headers.authorization) {
        const accessToken = req.headers.authorization.split(' ');
        const user = VerifyToken(accessToken[1]);
        req.body = {...req.body, user};
      }
      next();
    },
  ),
).post(
  asyncHandler(async (req: NextApiRequest, res: NextApiResponse) => {
    const {title} = req.body;
    const category = await prismaClient.category.create({
      data: {
        title,
      },
    });
    res.status(200).json({
      isSuccess: true,
      message: 'اطلاعات با موفقیت دریافت شد.',
      data: category,
    });
  }),
);
