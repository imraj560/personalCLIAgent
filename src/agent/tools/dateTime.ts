import { tool } from "ai";
import { z } from "zod";

export const dateTime = tool({
  description: "Get the current date and time",
  inputSchema: z.object({}),
  execute: async () => {
    return new Date().toISOString();
  },
});
