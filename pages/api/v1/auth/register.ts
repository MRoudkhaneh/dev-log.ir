import {NextApiRequest, NextApiResponse} from "next";
import {Router} from '@/server/router';
import prismaClient from '@/server/prismaClient';
import {HashingPassword} from '@/utils/bcrypt';
import {Pipe} from "@/utils/pipe";
import * as yup from 'yup'

export const registerValidation = async ({req,res}:{req:NextApiRequest,res:NextApiResponse})=>{
  const registerSchema = yup.object({username:yup.string(), password:yup.string(), email:yup.string().email()})
  const ok = await registerSchema.validate(req.body)
  if (!ok){
    return res.status(400).json('ریدی')
  }
  return {req,res}
}
export const registerController = async ({req,res}:{req:NextApiRequest,res:NextApiResponse}) =>{
  const {username, password, email} = req.body;
  try {
    const user = await  prismaClient.user.create({
      data: {
        username,
        password: await HashingPassword(password),
        email,
      },
    });
    res.status(200).json(user)
  }
  catch (err){
    res.status(500).json('ریدی')
  }
}


export default Router.post(async (req:NextApiRequest, res:NextApiResponse) => Pipe(registerValidation,registerController)({req,res}));
