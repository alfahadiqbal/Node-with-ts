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
        const obj = BookModel.findById(req.params.id)
        obj.then((resource:any) => {
    
            // resource not found, let's throw an error
            if (!resource) {
                // return next(errors.RESOURCE_NOT_FOUND())
                return next("RESOURCE_NOT_FOUND")
            }
    
            return resource.remove()
        })
        .then(() => res.json({'message': `Resource ${req.params.id} deleted`}))
        .catch((err) => {
            // send the error to the error handler
            return next(err)
        })
    }
}