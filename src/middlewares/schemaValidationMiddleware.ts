import { NextFunction, Response, Request } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";
import err from "../errors/index"

export function validateBody<T>(schema : ObjectSchema<T>): ValidationMiddleware {

    return validateSchema(schema, 'body');

}

export function validateParams<T>(schema: ObjectSchema<T>): ValidationMiddleware {
   
    return validateSchema(schema, 'params');

}
 
export function validateSchema(schema: ObjectSchema, type: 'body' | 'params'){
   
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req[type], { abortEarly: false});

        if(!error) {
            
            next();
            
        } else {

           res
           .status(httpStatus.BAD_REQUEST)
           .send(err.invalidDataError(error.details.map((d) => d.message)));
           
        }

        
    }
}


type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;