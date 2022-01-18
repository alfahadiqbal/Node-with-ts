
import express from 'express';
import { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { router } from './src/routes/index';
const app: Application = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/node-with-ts');

mongoose.connection.once('open', () => {
    console.log("Connection has been made with database");
}).on('error', err => {
    console.log("Connection error: ", err);
});

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Working :)");
});

app.use('/', router);
app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});

