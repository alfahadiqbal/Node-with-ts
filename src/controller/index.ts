import { Request, Response, NextFunction } from "express";
import { BookModel } from "../models/book";

export class BookController{
    static async add(req: Request, res: Response, next: NextFunction){

        const query = BookModel.findById(req.params.id).exec()
        query.then((resource) => {

            if (!resource) {
                res.status(200).send({"Status": "Added Sucessfully"})
            }

            return res.json(resource)
        })
        .catch((err) => {
            res.status(200).send({"Status": "Error Occured"})
        })
    }
    static async update(req: Request, res: Response, next: NextFunction){
        res.status(200).send({"Status": "Updated Sucessfully!"})
    }
    static async delete(req: Request, res: Response, next: NextFunction){
        res.status(200).send({"Status": "Delete Sucessfully!"})
    }
}