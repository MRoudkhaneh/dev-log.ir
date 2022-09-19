import {NextApiRequest, NextApiResponse} from 'next';
import {NextHandler} from 'next-connect';

export type TApiResult<T> = {
  isSuccess: boolean;
  message: string | undefined;
  data: T[] | T | null;
};

//types
export type TNextApi<TRes> = {
  req: NextApiRequest;
  res: NextApiResponse<TApiResult<TRes>>;
  err?: Error;
  next?: NextHandler;
};
