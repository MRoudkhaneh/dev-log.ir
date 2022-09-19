import {loginController} from '@/server/controllers';
import {Router} from '@/server/router';
import {NextApiRequest, NextApiResponse} from 'next';
import {asyncHandler} from '@/utils/asyncHandler';

export default Router.post(
  asyncHandler(async (req: NextApiRequest, res: NextApiResponse) =>
    loginController({req, res}),
  ),
);
