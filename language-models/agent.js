import * as dotenv from 'dotenv';
import { OpenAI } from 'langchain';
import { initializeAgentExecutor } from 'langchain/agents';
import { SerpAPI, Calculator } from 'langchain/tools';

dotenv.config({ path: '../.env' });

const model = new OpenAI({
  temperature: 0.9,
});
const tools = [
  new SerpAPI(process.env.SERP_API_KEY),
  new Calculator(),
];
// One of: 'zero-shot-react-description', 'chat-zero-shot-react-description', 'chat-conversational-react-description'
const agentType = 'zero-shot-react-description';

const executor = await initializeAgentExecutor(tools, model, agentType);
console.log('Loaded agent.');

const input = `
Who is Jennifer Lawrence's husband?
What is her age after ten yars from now?
`;

const result = await executor.call({ input });

console.log(result);
