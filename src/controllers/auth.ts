import { NextFunction, Request, Response } from "express";
import { UserModel } from "../models/user";
import * as jwt from "jsonwebtoken";

class AuthController {
    static login = async (req: Request, res: Response, next: NextFunction)=>{
        let username = req.body.username;
        let password = req.body.password;
        if(!(username && password)) {
            res.status(400).send("Please enter Username and passowrd")
        }
        const query = UserModel.findOne({username: username, password: password}).exec()
            query.then((user) => {
                if (!user) {
                    return next("Invalid Username or Password")
                }

                //Sing JWT, valid for 1 hour
                const token = jwt.sign(
                    { userId: user._id, username: user.username },
                    'config.jwtSecret',
                    { expiresIn: "1h" }
                );
                    
                // Send the jwt in the response
                return res.send({"loginToken": token});
                // return res.json("Login Sucessful")
            })
            .catch((err) => {
                // send the error to the error handler
                return next(err)
            })
        
    }
}

export default AuthController;