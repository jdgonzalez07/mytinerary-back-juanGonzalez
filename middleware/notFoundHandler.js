import createError from "http-errors";

const notFoundHandler = (request,response,next) => {
    next(createError(404, "Not found"))

};

export default notFoundHandler;