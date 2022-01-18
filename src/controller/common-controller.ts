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

const get = (request: Request, response: Response, next: NextFunction, model: Model<any>) => {
    const query = model.findById(request.params.id).exec()
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

const create = (request: Request, response: Response, next: NextFunction, model: Model<any>) => {
    const obj = model.create(request.body)
    obj.then((resource) => {
        return response.json(resource)
    })
    .catch((err) => {
        // send the error to the error handler
        return next(err)
    })
}

const update = (request: Request, response: Response, next: NextFunction, model: Model<any>) => {
    const obj = model.findById(request.params.id)
    obj.then((resource) => {

        if (!resource) {
            // return next(errors.RESOURCE_NOT_FOUND())
            return next("RESOURCE_NOT_FOUND")
        }

        // loop over the object and update the properties
        Object.keys(request.body).forEach((prop) => {
            resource[prop] = request.body[prop]
        })

        // save
        return resource.save()
    })
    .then((resource) => response.json(resource))
    .catch((err) => {
        // send the error to the error handler
        return next(err)
    })
}

const remove = (request: Request, response: Response, next: NextFunction, model: Model<any>) => {
    const obj = model.findById(request.params.id)
    obj.then((resource) => {

        // resource not found, let's throw an error
        if (!resource) {
            // return next(errors.RESOURCE_NOT_FOUND())
            return next("RESOURCE_NOT_FOUND")
        }

        return resource.remove()
    })
    .then(() => response.json({'message': `Resource ${request.params.id} deleted`}))
    .catch((err) => {
        // send the error to the error handler
        return next(err)
    })
}

export { getAll, get, create, update, remove}