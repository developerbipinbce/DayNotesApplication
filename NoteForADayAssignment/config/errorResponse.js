const customResponse = require("./globalResponse").customResponse

/**
 * Genearate Custom Error When Something went wrong
 */
exports.customError = {
    success: 0,
    badRequest:400,
    internalProblem: 100,    
    errorHandler: (type, message) => {
        customResponse.data = {};
        customResponse.error = {
        error:type,
        errorDescription: message
        }
        customResponse.isSuccess=false;
        return customResponse;
    }
}