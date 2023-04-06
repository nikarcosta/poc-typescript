import errors from "../errors/index.js";
import taskRepositories from "../repositories/taskRepositories.js"

async function getTasks() {

    const { rows, rowCount } = await taskRepositories.getTasks();

    if(!rowCount) throw errors.notFoundError();

    return rows;
}

export default {
    getTasks
}