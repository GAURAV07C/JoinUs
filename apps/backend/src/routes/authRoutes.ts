import { Router } from "express";
import { SignupController,LoginController } from "../controller/AuthController";
const AuthRouter: Router = Router();

AuthRouter.route("/signup").post(SignupController);
AuthRouter.route('/login').post(LoginController)

AuthRouter.route("/").get((req, res) => {
  res.json({
    messagge: "this is routes",
  });
});

export default AuthRouter;
