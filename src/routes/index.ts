import { Router} from 'express'
import { UserModel } from '../models/user';
import authRouter from './auth';
import { commonRoute } from './common-route';

export const router: Router = Router();

// This is how you can add all routes with single line of code :)
router.use('', commonRoute(UserModel))
router.use('', authRouter)
