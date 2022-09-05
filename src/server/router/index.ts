import {NextApiRequest, NextApiResponse} from 'next';
import nc from 'next-connect';

export const Router = nc<NextApiRequest, NextApiResponse>({
  attachParams: true,
  onError: (err, req, res) => {
    res.status(500).end('خطاییدداخلی');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('متاسفانه گشتیم نبود!');
  },
});
