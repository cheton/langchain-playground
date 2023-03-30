import * as dotenv from 'dotenv';
import { OpenAI } from 'langchain';
import { LLMChain } from 'langchain/chains';
import { PromptTemplate } from 'langchain/prompts';

dotenv.config({ path: '../.env' });

const model = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.9,
});
const template = 'What is a good name for a company that makes {product}?';
const prompt = new PromptTemplate({
  template,
  inputVariables: ['product'],
});
const chain = new LLMChain({ llm: model, prompt: prompt });

const res = await chain.call({ product: 'colorful socks' });
/*
const res = await model.call(
  'What would be a good company name a company that makes colorful socks?'
);
*/

console.log(res);
