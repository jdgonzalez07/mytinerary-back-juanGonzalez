import { Router } from "express";
import cities from "../cities.js";
import citiesRouter from "./citiesRouter.js";


const indexRouter = Router();

indexRouter.get("/", (request, response, next) => {
  response.send("Estoy en el servidor /api");
});

indexRouter.use('/cities',citiesRouter)

export default indexRouter;
