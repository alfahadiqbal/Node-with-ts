import { Request, Response, NextFunction } from "express";

export class BookController{
    static async add(req: Request, res: Response, next: NextFunction){
        res.status(200).send({"Status": "Added Sucessfully!"})
    }
    static async update(req: Request, res: Response, next: NextFunction){
        res.status(200).send({"Status": "Updated Sucessfully!"})
    }
}