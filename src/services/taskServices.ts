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

export default {
    getTasks,
    addNewTask
}