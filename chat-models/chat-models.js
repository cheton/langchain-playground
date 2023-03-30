import * as dotenv from 'dotenv';
import { ChatOpenAI } from 'langchain/chat_models';
import { HumanChatMessage, SystemChatMessage } from 'langchain/schema';

dotenv.config({ path: '../.env' });

const chat = new ChatOpenAI({
  temperature: 0.9,
});

const res = await chat.call([
  new SystemChatMessage(
    'You are a helpful assistant that translates English to Traditional Chinese.',
  ),
  new HumanChatMessage(
    'Translate: I love Tonic UI component library',
  ),
]);
console.log(res);
