import { NextFunction, Response, Request } from "express";
import { ObjectSchema } from "joi";
import err from "../errors/index.js"



export function validateSchema<T>(schema: ObjectSchema) {

    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if(error) {
            const errors = error.details.map((detail) => detail.message);
            throw err.badRequest(errors);
        }

        next();
    }
}



