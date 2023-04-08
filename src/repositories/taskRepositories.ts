import connectionDb from "../config/database.js";

async function getTasks() {

    return await connectionDb.query(`
        SELECT * FROM tasks;
    `);
}


async function addNewTask({description}) {

    return await connectionDb.query(`
        INSERT INTO tasks (description)
        VALUES ($1)
    `,[description]);
}

export default {
    getTasks,
    addNewTask
}