import { dateTime } from "./dateTime.js";
import { readFile, writeFile, listFiles, deleteFile } from "./file.ts";
import { webSearch } from "./webSearch.ts";
import { runCommand } from "./shell.ts";


// All tools combined for the agent
export const tools = {
  dateTime,
  readFile,
  writeFile,
  listFiles,
  deleteFile,
  webSearch,
  runCommand
};

// Export individual tools for selective use in evals
export { readFile, writeFile, listFiles, deleteFile } from "./file.ts";
export {dateTime} from "./dateTime.ts";
export {webSearch} from "./webSearch.ts"
export {runCommand} from "./shell.ts";

// Tool sets for evals
export const fileTools = {
  readFile,
  writeFile,
  listFiles,
  deleteFile,
};

export const terminalTools = {
  runCommand,
}