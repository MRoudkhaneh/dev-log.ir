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
).patch(
  '/api/v1/post/:id',
  asyncHandler(async (req: NextApiRequest, res: NextApiResponse) => {
    const {title, content, user, published} = req.body;
    const posts = await prismaClient.post.findUnique({
      where: {id: +req?.query.id!},
    });

    if (posts?.authorId !== user.id) {
      return res.status(400).json({
        isSuccess: false,
        message: 'این پست متعلق به شما نیست!',
        data: null,
      });
    }
    const updatePost = await prismaClient.post.update({
      where: {id: +req?.query.id!},
      data: {
        content,
        title,
        published,
      },
    });
    res.status(200).json({
      isSuccess: true,
      message: 'اطلاعات با موفقیت دریافت شد.',
      data: updatePost,
    });
  }),
);
