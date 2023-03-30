import * as dotenv from 'dotenv';
import { OpenAI } from 'langchain';
import { CallbackManager } from 'langchain/callbacks';

dotenv.config({ path: '../.env' });

const chat = new OpenAI({
  streaming: true,
  callbackManager: CallbackManager.fromHandlers({
    async handleLLMNewToken(token) {
      //console.log('New token:', token);
    },
  }),
});

const res = await chat.call(
  'Write me a song about blue and white pottery singing by Jay Chou.',
);

console.log(res);
