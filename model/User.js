import { Schema, model } from "mongoose";

const userSchema = Schema(
  {
    name: {type: String, require: true},
    lastName: { type: String },
    email: { type: String, require: true },
    password: { type: String, require: true },
    photo: { type: String, default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png' },
    country: {type: String}
    
  },
  {
    timestamps: true,
  }
);

const User = model("user", userSchema);

export default User;
