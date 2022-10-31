import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const keywordRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  createKwData: publicProcedure
    .input(
      z.object({
        keyword: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // Operation to run
      await ctx.prisma.keyword.create({
        data: {
          keyword: input.keyword,
        },
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
