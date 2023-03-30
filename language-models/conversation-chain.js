import * as dotenv from 'dotenv';
import { OpenAI } from 'langchain';
import { BufferMemory } from 'langchain/memory';
import { ConversationChain } from 'langchain/chains';

dotenv.config({ path: '../.env' });

const model = new OpenAI({
  temperature: 0.9,
});
const memory = new BufferMemory();
const chain = new ConversationChain({ llm: model, memory: memory });

console.log(await chain.call({ input: 'Hi, nice to meet you. My name is Cheton. How are you?' }));

console.log(await chain.call({ input: 'Do you remember my name?' }));
