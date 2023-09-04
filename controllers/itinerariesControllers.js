import Itinerary from "../model/Itinerary.js";
import City from "../model/City.js";

const itinerariesControllers = {
  getAllItineraries: async (request, response, next) => {
    let itineraries;
    let success = true;
    try {
      itineraries = await Itinerary.find();
      response.json({
        response: itineraries,
        success,
      });
    } catch (err) {
      console.log(err);
      success = false;
      next(err);
    }
  },

  getOneItinerary: async (request, response, next) => {
    const { id } = request.params;
    console.log(id);
    let itinerary;
    let success = true;
    try {
      itinerary = await Itinerary.findById(id);
      response.json({
        response: itinerary,
        success,
      });
    } catch (err) {
      console.log(err);
      success = false;

      next(err);
    }
  },

  createOneItinerary: async (request, response, next) => {
    console.log(request.body);
    let itinerary;
    let success = true;
    try {
      itinerary = await Itinerary.create(request.body);
      response.json({
        response: itinerary,
        success,
      });
    } catch (err) {
      console.log(err);
      success = false;
    }
  },

  updateOneItinerary: async (request, response, next) => {
    const { id } = request.params;
    console.log(id);
    let itinerary;
    let success = true;

    try {
      itinerary = await Itinerary.findOneAndUpdate({ _id: id }, request.body, {
        new: true,
      });
      response.json({
        response: itinerary,
        success,
      });
    } catch (err) {
      console.log(err);
      success = false;
      next(err);
    }
  },

  deleteOneItinerary: async (request, response, next) => {
    const { id } = request.params;
    console.log(id);
    let itinerary;
    let success = true;

    try {
      itinerary = await Itinerary.findOneAndDelete({ _id: id });
      response.json({
        response: itinerary,
        success,
      });
    } catch (err) {
      console.log(err);
      success = false;

      next(err);
    }
  },

  getItineraryForCity: async (request, response, next) => {
    let city;
    let success = true;
    const { id } = request.params;
    try {
      city = await Itinerary.find({ city: id });
      response.json({
        response: city,
        success,
      });
    } catch (err) {
      console.log(err);
      success = false;
      next(err);
    }
  },
};

export default itinerariesControllers;
