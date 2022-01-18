import { Router, Request, Response } from 'express'
import { Model } from 'mongoose';

export const commonRoute = (model: Model<any>, path?: string): Router => {
    const router: Router = Router();
    // TODO: Add common routes here
   return router
}