import User from "../model/User.js";

export const emailExist = async (req, res, next) => {
  const exist = await User.findOne({ email: req.body.email });
  if (!exist) {
   return next();
  } else {
    return res.status(400).json({
      succes: false,
      message: "Email already exists",
    });
  }
};
