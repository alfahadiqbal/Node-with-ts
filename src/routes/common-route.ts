import { Router, Request, Response } from 'express'
import { Model } from 'mongoose';
import { getAll } from '../controller/common-controller';

export const commonRoute = (model: Model<any>, path?: string): Router => {
    const router: Router = Router();
    const urlPath = (path)? path: model.modelName.toLowerCase()

    router.get(
        `/${urlPath}s`,
        // middleware.authenticate,
        (request, response, next) => {
            getAll(request, response, next, model)
        }
    )

    return router
}