import express from 'express';
import { Request, Response } from 'express';


const app = express();

app.use(express.json());

app.get('/test', (req: Request, res: Response) => {
  res.send('hello world');
});

app.listen(8000, () => {
  console.log('helth check');
});
