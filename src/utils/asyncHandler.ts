import {NextApiRequest, NextApiResponse} from 'next';
import {NextHandler} from 'next-connect';

export const asyncHandler =
  (fn: CallableFunction) =>
  (req: NextApiRequest, res: NextApiResponse, next: NextHandler) =>
    Promise.resolve(fn(req, res, next)).catch(next);
