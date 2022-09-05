import jwt from 'jsonwebtoken';

type TCreateToken = {
  payload: {id: number; username: string};
  expireTime: '3d' | '7d';
};

export const CreateToken = ({payload, expireTime}: TCreateToken) => {
  return jwt.sign(payload, `${process.env.SECRET_JWT}`, {
    expiresIn: expireTime,
  });
};

export const VerifyToken = (token: string) => {
  return jwt.verify(token, `${process.env.SECRET_JWT}`);
};
