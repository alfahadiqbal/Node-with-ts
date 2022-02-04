import { NextFunction, Request, Response, Router } from "express";
// import AuthController from "../controllers/AuthController";
// import { checkJwt } from "../middlewares/checkJwt";

const authenticationRouter = Router();

//Login route
authenticationRouter.post("/login", (req: Request, res: Response, next:NextFunction)=>{
    res.status(200).send("/login success")
});

//Change my password
authenticationRouter.post("/change-password", (req: Request, res: Response, next:NextFunction)=>{
    res.status(200).send("change-password success")
});

export default authenticationRouter;