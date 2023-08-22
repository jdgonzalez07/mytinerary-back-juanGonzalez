import cities from "../cities.js";
import City from "../model/City.js";

const citiesControllers = {
  getAllCities: async (request, response, next) => {
    let cities;
    let success = true;
    try {
      cities = await City.find();
      response.json({
        response: cities,
        success,
      });
    } catch (err) {
      console.log(err);
      success = false;
      next(err);
    }
  },

  getOneCity: async (request, response, next) => {
    const { id } = request.params;
    console.log(id);
    let city;
    let success = true;

    try {
      city = await City.findById(id);
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

  createOneCity: async (request, response, next) => {
    console.log(request.body);
    let city;
    let success = true;
    try {
      city = await City.create(request.body);
      response.json({
        response: city,
        success,
      });
    } catch (err) {
      console.log(err);
      success = false;
    }
  },

  updateOneCiy: async (request, response, next) => {
    const { id } = request.params;
    console.log(id);
    let city;
    let success = true;

    try {
      city = await City.findOneAndUpdate({ _id: id }, request.body, {
        new: true,
      });
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

  deleteOneCity: async (request, response, next) => {
    const { id } = request.params;
    console.log(id);
    let city;
    let success = true;

    try {
      city = await City.findOneAndDelete({ _id: id });
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

export default citiesControllers;
