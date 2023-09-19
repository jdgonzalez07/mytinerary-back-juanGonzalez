import joi from "joi";
import joiPws from "joi-password-complexity";

const complexityOptions = {
    min: 5,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 3,
  };

export const signUpSchema = joi.object({
  name: joi.string().required().min(2).max(12).messages({
    "string.min":"the name must have at least two characters",
    "string.max":"the name can have a maximum of 12 characters"
  }),
  lastName: joi.string().min(2).max(35).messages({
    "string.min":"the lastName must have at least two characters",
    "string.max":"the lastName can have a maximum of 12 characters"
  }),
  photo: joi.string(),
  country: joi.string(),
  email: joi.string().email().required().messages({
    "any.required":"The email is required",
    "string.email": "The email is invalid"
  }),
  password: joiPws(complexityOptions).messages({
    "passwordComplexity.tooShort": "Passwords must have a minimum of 5 characters",
    "passwordComplexity.lowercase":"The password must have at least one lowercase letter",
    "passwordComplexity.uppercase":"The password must have at least one uppercase letter",
    "passwordComplexity.symbol": "password must have at least one special character",
    "passwordComplexity.requirementCount": "the password must meet at least 3 requirements"
  }),
});
