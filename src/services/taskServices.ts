import errors from "../errors/index.js";
import taskRepositories from "../repositories/taskRepositories.js"

async function getTasks() {

    const { rows, rowCount } = await taskRepositories.getTasks();

    if(!rowCount) throw errors.notFoundError();

    return rows;
}

async function addNewTask({description}) {

    await taskRepositories.addNewTask({description});

    
}

async function updateTask(description: string, taskId: number) {

   const { rowCount } = await taskRepositories.findTaskById(taskId);

   if(!rowCount) throw errors.notFoundError();

   await taskRepositories.updateTask(description,taskId);

    
}

export default {
    getTasks,
    addNewTask,
    updateTask
}