import joi from "joi";
import joiPwd from "joi-password-complexity";

const complexityOptions = {
    min: 5,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 3,
  };

export const signInSchema = joi.object({
    email: joi.string().email().required().messages({
        "string.empty":"the email cannot be empty",
        "any.required":"the email is required",
        "string.email":"the email must have @ and .com"
    }),
    password: joiPwd(complexityOptions).messages({

    })
})