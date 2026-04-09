import "dotenv/config"
import { generateText, tool, type ModelMessage } from 'ai'
import { openai } from '@ai-sdk/openai'
import { SYSTEM_PROMPT } from './system/prompt'
import type { AgentCallbacks } from '../types'
import { tools } from "./tools"
import { Laminar, getTracer } from "@lmnr-ai/lmnr"
import { executeTool } from "./executeTools"
import { ToolCall } from "../../dist/ui/components/ToolCall"

const MODEL_NAME = 'gpt-5-mini';

Laminar.initialize({
    
projectApiKey:process.env.LMNR_PROJECT_API_KEY
})


export const runAgent = async(userMessage: string, conversationHistory: ModelMessage[], callbacks: AgentCallbacks,) => {

    const { text,toolCalls } = await generateText({

        model: openai(MODEL_NAME),
        prompt: userMessage,
        system: SYSTEM_PROMPT,
        tools,
        experimental_telemetry:{

            isEnabled:true,
            tracer:getTracer(),
        }

    })  

    console.log(text, toolCalls)

    toolCalls.forEach(async(tc)=>{

        console.log(await executeTool(tc.toolName, tc.input))
    })



}

runAgent('What is the current time right now?');

