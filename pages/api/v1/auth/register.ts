import {Router} from '@/server/router';
import prismaClient from '@/server/prismaClient';
import {HashingPassword} from '@/utils/bcrypt';

export const Register = Router.post(async (req, res) => {
  const {username, password, email} = req.body;
  try {
    prismaClient.user.create({
      data: {
        username,
        password: await HashingPassword(password),
        email,
      },
    });
  } catch (err) {}
});
