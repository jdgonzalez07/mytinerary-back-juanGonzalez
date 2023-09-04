import { Schema, model } from "mongoose";

const itinerarySchema = Schema(
  {
    nameItinerary: {type: String, default: "For now there are no itineraries for this city"},
    imageItinerary: { type: String, require: true },
    imagePerson: { type: String, require: true },
    namePerson: { type: String, require: true },
    price: { type: Number, require: true },
    duration: { type: Number, require: true },
    hashtags: { type: String, require: true },
    city: { type: Schema.Types.ObjectId, ref: 'City', require: true},
  },
  {
    timestamps: true,
  }
);

const Itinerary = model("itinerary", itinerarySchema);

export default Itinerary;
