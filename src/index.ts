import { Request, Response, NextFunction } from 'express';
import express = require('express');
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

const port = 80;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
