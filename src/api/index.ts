import { config } from 'dotenv';
config();
import 'reflect-metadata'; // this shim is required
import { useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import { Application } from './Application';

useContainer(Container);

const app = new Application();

const port = parseInt(process.env.DEFAULT_PORT || '8001', 10);
app.start(port)
  .then(() => {
    console.log(`server is running on port ${port}`);
  })
  .catch((err) => {
    console.log('err: ', err);
  });

process.on('uncaughtException', (err) => {
  console.log('uncaughtException: ', err);
});
