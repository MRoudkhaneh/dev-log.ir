import * as trpc from '@trpc/server';
import {z} from 'zod';

import {Context} from './context';

export const ServerRouter = trpc
  .router<Context>()
  .query('findAll', {
    resolve: async ({ctx}) => {
      return await ctx.prisma.user.findMany();
    },
  })
  .mutation('insertOne', {
    input: z.object({
      email: z.string(),
      password: z.string(),
    }),
    resolve: async ({input, ctx}) => {
      return await ctx.prisma.user.create({
        data: {
          passwordHash: input.password,
          email: input.email,
          password: '1234',
        },
      });
    },
  });

export type ServerRouter = typeof ServerRouter;
