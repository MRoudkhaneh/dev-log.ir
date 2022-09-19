import nc from 'next-connect';
import {TApiResult} from '@/types/TApiResult';
import {NextApiRequest, NextApiResponse} from 'next';

export const Router = nc<NextApiRequest, NextApiResponse>({
  attachParams: true,
  onError: (
    err: Error,
    req: NextApiRequest,
    res: NextApiResponse<TApiResult<null>>,
  ) => {
    res.status(500).json({
      isSuccess: false,
      message: err?.message,
      data: null,
    });
  },
  onNoMatch: (req: NextApiRequest, res: NextApiResponse<TApiResult<null>>) => {
    res.status(404).json({
      isSuccess: false,
      message: 'متاسفانه گشتیم نبود!',
      data: null,
    });
  },
});
