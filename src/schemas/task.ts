import joi, { ObjectSchema } from "joi";

interface Task {
    description: string;
}

export const taskSchema: ObjectSchema<Task> = joi.object({
    description: joi.string().required()
});