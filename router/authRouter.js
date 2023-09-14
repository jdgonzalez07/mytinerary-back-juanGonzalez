import { Router } from "express";
import authController from "../controllers/authControllers.js";
import { signUpSchema } from "../validators/signUpValidator.js";
import validator from "../middleware/validator.js";
import { emailExist } from "../middleware/emailExists.js";
import { signInSchema } from "../validators/signInValidator.js";
import passport from "../middleware/passportAuth.js";
const authRouter = Router();

const { signUp, signIn, loginWithToken} = authController;

authRouter.post("/in", signIn);
authRouter.get("/token",passport.authenticate('jwt', { session: false }),loginWithToken);
authRouter.post("/up", validator(signUpSchema), emailExist, signUp);


export default authRouter;
