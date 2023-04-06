import { ApplicationError } from "../protocols/protocols";

function notFoundError() {
    
    return {
      name: "NotFoundError",
      message: "No result for this search!",
    };

}


function conflictError(message: string) {
    return {
      name: "ConflictError",
      message,
    };
}

function invalidDataError(details: string[]): ApplicationInvalidateDataError {
    return {
        name: "InvalidDataError",
        message: "Invalid data",
        details
    }
}

type ApplicationInvalidateDataError = ApplicationError & {
    details: string[];
}
  
export default {
    notFoundError,
    conflictError,
    invalidDataError
};
  