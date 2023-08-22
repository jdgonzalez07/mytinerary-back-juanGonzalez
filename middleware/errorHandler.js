const errorHandler = (error,request,response,next) => {
    let status = error.status || 500;

    response.status(status).json({
        success: false,
        status:status,
        error: error.message
    })

}

export default errorHandler;