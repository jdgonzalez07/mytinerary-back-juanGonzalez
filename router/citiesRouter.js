import { Router } from "express";
import citiesControllers from "../controllers/citiesControllers.js";
const { getAllCities, getOneCity, createOneCity, updateOneCiy, deleteOneCity} = citiesControllers;

const citiesRouter = Router();

citiesRouter.get("/", getAllCities);
citiesRouter.post("/", createOneCity);

citiesRouter.get("/:id", getOneCity);
citiesRouter.put("/:id", updateOneCiy)
citiesRouter.delete("/:id", deleteOneCity)

export default citiesRouter;
