import { Router } from "express";
import { BookController } from "../controller";
import { BookModel } from "../models/book";
import { API_TYPE } from "../models/types";
import { commonRoute } from "./common-route";

// If you want to create some routes using common functionlity and for rest you want to write custom
// functionality you can do that by specifing required routes in array and then you can write 
// rest of routes yourself

export const bookRouter: Router = commonRoute(BookModel, [API_TYPE.GET_ALL])

bookRouter.put('book', BookController.update)
bookRouter.post('book', BookController.add)
bookRouter.delete('book', BookController.delete)


