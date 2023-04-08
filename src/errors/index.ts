function notFoundError() {
    
    return {
      name: "NotFoundError",
      message: "No result for this search!",
    };

}


function badRequest(message: string | string[]) {
    return {
      name: "BadRequest",
      message,
    };
}

  
export default {
    notFoundError,
    badRequest
};
  