import { Request, Response, NextFunction } from 'express';
import express = require('express');
export const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
