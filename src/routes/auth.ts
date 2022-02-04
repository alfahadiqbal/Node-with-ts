import { NextFunction, Request, Response, Router } from "express";
// import AuthController from "../controllers/AuthController";
// import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
//Login route
router.post("/login", (req: Request, res: Response, nexr:NextFunction)=>{
    res.status(200).send("/login success")
});
//Change my password
router.post("/change-password", (req: Request, res: Response, nexr:NextFunction)=>{
    res.status(200).send("change-password success")
});
export default router;