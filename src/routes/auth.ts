import { NextFunction, Request, Response, Router } from "express";
import AuthController from "../controllers/auth";
// import AuthController from "../controllers/AuthController";
// import { checkJwt } from "../middlewares/checkJwt";

const authRouter = Router();

//Login route
authRouter.post("/login", AuthController.login)

//Change my password
authRouter.post("/change-password", (req: Request, res: Response, next:NextFunction)=>{
    res.status(200).send("change-password success")
});

export default authRouter;