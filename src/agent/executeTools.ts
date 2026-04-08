import { tools } from "./tools";
export type Toolname = keyof typeof tools;

export const executeTools = async(name:string, args:any)=>{

    const tool = tools[name as Toolname];

    if(!tool){

        return 'Unknown tool, does not exist';
    }

    const execute = tool.execute;

    if(!execute){

        return 'This is not a registered tool';
    }

    const result = await execute(args, {

        toolCallId:'',
        messages:[]
    })

    return String(result);
}
