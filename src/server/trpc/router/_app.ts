import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { keywordRouter } from "./keyword";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  keyword: keywordRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
