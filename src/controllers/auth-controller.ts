import { NextFunction, Request, Response } from "express";
import { UserModel } from "../models/user";

class AuthController {
    static login = async (req: Request, res: Response, next: NextFunction)=>{
        let [username, password] = req.body;

        if(!(username && password)) {
            res.status(400).send("Please enter Username and passowrd")
        }
        const query = UserModel.find({username: username, password: password}).exec()
            query.then((resource) => {
                if (!resource) {
                    // return next(errors.RESOURCE_NOT_FOUND())
                    return next("RESOURCE_NOT_FOUND")
                }
                
                return res.json("Login Sucessful")
            })
            .catch((err) => {
                // send the error to the error handler
                return next(err)
            })
        
    }
}