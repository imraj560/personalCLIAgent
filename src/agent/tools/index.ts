import { dateTime } from "./dateTime.js";
import { readFile, writeFile, listFiles, deleteFile } from "./file.ts";


// All tools combined for the agent
export const tools = {
  dateTime,
  readFile,
  writeFile,
  listFiles,
  deleteFile,
};

// Export individual tools for selective use in evals
export { readFile, writeFile, listFiles, deleteFile } from "./file.ts";

// Tool sets for evals
export const fileTools = {
  readFile,
  writeFile,
  listFiles,
  deleteFile,
};