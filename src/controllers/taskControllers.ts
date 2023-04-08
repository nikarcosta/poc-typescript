import { Response, Request, NextFunction } from "express";
import httpStatus from "http-status";
import taskServices from "../services/taskServices.js";

async function getTasks(req: Request, res: Response) {

    try {

        const tasks = await taskServices.getTasks();

        return res.send(tasks);
    
    } catch(err) {

        return res.sendStatus(httpStatus.NO_CONTENT);

    }
    
}

async function addNewTask(req: Request, res: Response, next: NextFunction) {

    const { description } = req.body;

    try {

        await taskServices.addNewTask({description});

        return res.sendStatus(201);

    } catch(err) {

        next(next);

    }
}

export default {
    getTasks,
    addNewTask
}