import httpStatus from "http-status";
import { Request, Response, NextFunction } from "express";
import { ApplicationError } from "../protocols/protocols.js";

export function handleApplicationErrors(
    err: ApplicationError, 
    req: Request, 
    res: Response, 
    next: NextFunction
    ) {

    if (err.name === "NotFoundError") {
        return res.status(httpStatus.NOT_FOUND).send({
          message: err.message,
        });
      }

    if (err.name === "BadRequest") {
        return res.status(httpStatus.BAD_REQUEST).send({
          message: err.message,
       });
    }
    
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: "InternalServerError",
        message: "Internal Server Error",
      });
}