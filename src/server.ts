import express from 'express';
import { Request, Response } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.NODE_PORT || 4000;
console.log('PORT', PORT);
app.use(express.json());

app.get('/test', (req: Request, res: Response) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log('helth check');
});
