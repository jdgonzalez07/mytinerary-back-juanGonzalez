import { Schema, model } from "mongoose";

const citySchema = Schema(
  {
    src: { type: String, require: true },
    name: { type: String, require: true },
    country: { type: String, require: true },
    population: { type: String, require: true },
    description: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const City = model("city", citySchema);

export default City;
