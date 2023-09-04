import { Router } from "express";
import itinerariesControllers from "../controllers/itinerariesControllers.js";
const {getAllItineraries, createOneItinerary, getOneItinerary, updateOneItinerary, deleteOneItinerary, getItineraryForCity} = itinerariesControllers;


const itinerariesRouter = Router();

itinerariesRouter.get("/", getAllItineraries);
itinerariesRouter.post("/", createOneItinerary);


itinerariesRouter.get("/:id", getItineraryForCity)
itinerariesRouter.get("/:id", getOneItinerary);
itinerariesRouter.put("/:id", updateOneItinerary);
itinerariesRouter.delete("/:id", deleteOneItinerary);

export default itinerariesRouter;