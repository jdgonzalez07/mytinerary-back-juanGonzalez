import { Router } from "express";
import citiesControllers from "../controllers/citiesControllers.js";
const { getAllCities, getOneCity, createOneCity, updateOneCity, deleteOneCity, assignItinerary} = citiesControllers;

const citiesRouter = Router();

citiesRouter.get("/", getAllCities);
citiesRouter.post("/", createOneCity);

//citiesRouter.put("/:id",assignItinerary )

citiesRouter.get("/:id", getOneCity);
citiesRouter.put("/:id", updateOneCity)
citiesRouter.delete("/:id", deleteOneCity)

export default citiesRouter;
