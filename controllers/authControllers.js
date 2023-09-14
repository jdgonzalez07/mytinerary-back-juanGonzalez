import User from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const authController = {
  signUp: async (req, res, next) => {
    try {
      const passwordHash = bcrypt.hashSync(req.body.password, 10);
      console.log(passwordHash);
      req.body.password = passwordHash;

      const newUser = await User.create(req.body);

      const token = jwt.sign({ name: newUser.name, email:newUser.email }, process.env.SECRET_KEY, {expiresIn: "1h"});

      return res.status(201).json({
        success: true,
        userData: newUser,
        token:token,
        message: "Sign up successfully",
      });
    } catch (error) {
      console.log(error), next(error);
    }
  },

  signIn: async (req, res, next) => {
    try {
      let { email: emailBody, password } = req.body;
      const userInDB = await User.findOne({ email: emailBody });
      if (!userInDB) {
        throw new Error("No user exists with this email");
      }

      const passwordValidated = bcrypt.compareSync(password, userInDB.password);
      if (!passwordValidated) {
        throw new Error("the email/password is incorrect");
      }

      let { name, email, photo } = userInDB;
      const token = jwt.sign({ name, email }, process.env.SECRET_KEY, {expiresIn: "1h"});
      return res.status(200).json({
        success: true,
        userData: { name, email, photo },
        token: token,
        message: "Sign in successfully",
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  loginWithToken: (req,res,next) =>{
    console.log(req.user)
    const {name, email, photo} = req.user
    return res.status(200).json({
      success: true,
      userData: {name, email, photo},
      message: "Sign in with token successfully",
    });
  }
};

export default authController;
