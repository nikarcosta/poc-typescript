import joi from "joi";

export const taskSchema = joi.object({
    description: joi.string().required()
});