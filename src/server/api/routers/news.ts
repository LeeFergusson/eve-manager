import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const newsRouter = createTRPCRouter({
  getLatest: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.newsItem.findMany({
      take: 3,
      orderBy: {
        posted: "desc",
      },
    });
  }),
});
