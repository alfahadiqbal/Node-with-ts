import { NextFunction, Request, Response } from "express";
import { Model } from "mongoose";

const getAll = (request: Request, response: Response, next: NextFunction, model: Model<any>) => {
    const query = model.find({}).exec()
        query.then((resource) => {

            if (!resource) {
                // return next(errors.RESOURCE_NOT_FOUND())
                return next("RESOURCE_NOT_FOUND")
            }

            return response.json(resource)
        })
        .catch((err) => {
            // send the error to the error handler
            return next(err)
        })
}


export {getAll}