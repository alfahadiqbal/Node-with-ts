
import express from 'express';
import {Application, Request, Response} from "express";
import bodyParser from "body-parser";
const app: Application = express();
const port = 3000;

app.use(bodyParser.json());

app.get( "/", ( req: Request, res: Response ) => {
    res.send( "Working :)" );
});

app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});