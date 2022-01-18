import { Router} from 'express'
import { BookModel } from '../models/book';
import { commonRoute } from './common-route';

export const router: Router = Router();

// This is how you can add all routes with single line of code :)
router.use('', commonRoute(BookModel))
