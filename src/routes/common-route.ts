import { Router, Request, Response } from 'express'
import { Model } from 'mongoose';
import { create, get, getAll, remove, update } from '../controller/common-controller';
import { API_TYPE } from '../models/types';

export const commonRoute = (model: Model<any>, requiredAPIs?: API_TYPE[], path?: string): Router => {
    const router: Router = Router();
    const urlPath = (path)? path: model.modelName.toLowerCase()

    if(requiredAPIs.includes(API_TYPE.GET_ALL)){
        router.get(
            `/${urlPath}s`,
            // middleware.authenticate,
            (request, response, next) => {
                getAll(request, response, next, model)
            }
        )
    }

    if(requiredAPIs.includes(API_TYPE.GET)){
        router.get(
            `/${urlPath}/:id`,
            // middleware.authenticate,
            (request, response, next) => {
                get(request, response, next, model)
            }
        )
    }

    if(requiredAPIs.includes(API_TYPE.CREATE)){
        router.post(
            `/${urlPath}`,
            // middleware.authenticate,
            (request: Request, response: Response, next) => {
                create(request, response, next, model)
            }
        )
    }

    router.put(
        `/${urlPath}/:id`,
        // middleware.authenticate,
        (request: Request, response: Response, next) => {
            update(request, response, next, model)
        }
    )
    
    router.delete(
        `/${urlPath}/:id`,
        // middleware.authenticate,
        (request: Request, response: Response, next) => {
            remove(request, response, next, model)
        }
    )

    return router
}