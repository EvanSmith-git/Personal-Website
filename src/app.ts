import { Request, Response, NextFunction } from 'express';
import express = require('express');
export const app = express();

app.use(express.static('public'));
