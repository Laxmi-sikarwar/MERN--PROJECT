const errorHandle = (statusCode, messsage) => {
    const error = new Error()
    error.statusCode = statusCode
    error.message = messsage;
    return error;
}

module.exports = { errorHandle }