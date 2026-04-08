import { tool } from "ai";
import z from "zod";

export const dateTime = tool({

    description: 'Returns the current date adn time, use this tool before any time relate task',
    inputSchema: z.object({}),
    execute: async()=>{
        return `The current date and time is ${new Date().toISOString()}`
    }
})
