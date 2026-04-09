import { executeTool } from "../executeTools";
async function testTool() {
    console.log("--- Starting Manual Tool Test ---");
    
    try {
        // We simulate what the LLM would send
        const result = await executeTool('getDateTime', {});
        
        console.log("Result from tool:", result);
        
        if (result.includes("Unknown tool") || result.includes("not a registered tool")) {
            console.error("Test Failed: Tool registration issue.");
        } else {
            console.log("Test Passed: Tool returned data.");
        }
    } catch (error) {
        console.error("Test Crashed:", error);
    }
}

testTool();