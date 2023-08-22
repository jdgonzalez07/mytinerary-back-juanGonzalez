import "dotenv/config.js";
import cors from "cors";
import express from "express";
import indexRouter from "./router/indexRouter.js";
import "./config/database.js";
import errorHandler from "./middleware/errorHandler.js";
import notFoundHandler from "./middleware/notFoundHandler.js";

const server = express();
server.use(cors());
server.use(express.json());

server.use(
  "/api",(request, response, next) => {console.log("Hicieron una petición a mi backend ",request.url,"a la hora: ",
    new Date().toLocaleString());
    next();
  },
  indexRouter
);

server.get("/", (request, response, next) => {
  response.send("Estoy en el servidor /");
});

server.use(notFoundHandler)
server.use(errorHandler)

server.listen(process.env["PORT"], () => {
  console.log("Servidor corriendo en el puerto " + process.env["PORT"]);
});
