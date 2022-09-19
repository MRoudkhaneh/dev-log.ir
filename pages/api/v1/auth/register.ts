import {NextApiRequest, NextApiResponse} from 'next';
import {Router} from '@/server/router';
import {Pipe} from '@/utils/pipe';
import {registerController, registerValidation} from '@/server/controllers';

export default Router.post(async (req: NextApiRequest, res: NextApiResponse) =>
  Pipe(
    registerValidation,
    registerController,
  )({
    req,
    res,
  }),
);
