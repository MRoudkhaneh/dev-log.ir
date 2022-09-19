import {Router} from '@/server/router';
import {VerifyToken} from '@/utils/jwt';
import {asyncHandler} from '@/utils/asyncHandler';
import {NextApiRequest, NextApiResponse} from 'next';
import {NextHandler} from 'next-connect';
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
)
  .post(
    asyncHandler(async (req: NextApiRequest, res: NextApiResponse) => {
      const {title, content, user, categoryId} = req.body;
      const post = await prismaClient.post.create({
        data: {
          title,
          content,
          categoryId,
          authorId: user.id,
        },
      });
      res.status(200).json({
        isSuccess: true,
        message: 'اطلاعات با موفقیت دریافت شد.',
        data: post,
      });
    }),
  )
  .get(
    asyncHandler(async (req: NextApiRequest, res: NextApiResponse) => {
      const {user} = req.body;
      const posts = await prismaClient.post.findMany({
        where: {authorId: user.id},
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          content: true,
          title: true,
          published: true,
          category: {
            select: {
              title: true,
            },
          },
        },
      });
      res.status(200).json({
        isSuccess: true,
        message: 'اطلاعات با موفقیت دریافت شد.',
        data: posts,
      });
    }),
  );
