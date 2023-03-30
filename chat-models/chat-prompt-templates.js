import * as dotenv from 'dotenv';
import { ChatOpenAI } from 'langchain/chat_models';
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from 'langchain/prompts';

dotenv.config({ path: '../.env' });

const chat = new ChatOpenAI({
  temperature: 0,
});

const translationPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    'You are a helpful assistant that translates {input_language} to {output_language}.',
  ),
  HumanMessagePromptTemplate.fromTemplate('{text}'),
]);

const res = await chat.generatePrompt([
  await translationPrompt.formatPromptValue({
    input_language: 'English',
    output_language: 'Transition Chinese',
    text: 'I love Tonic UI component library',
  }),
]);
console.log(JSON.stringify(res, null, 2));
