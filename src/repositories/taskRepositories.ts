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

async function findTaskById(taskId:number){

    return await connectionDb.query(`
        SELECT * from tasks
        WHERE id = $1
    `, [taskId]);


}

async function updateTask(description:string, taskId:number): Promise<void>{

    await connectionDb.query(`
        UPDATE tasks
        SET description = $1
        WHERE id = $2
    `, [description, taskId]);    

}


async function deleteTask(taskId:number): Promise<void>{

    await connectionDb.query(`
        DELETE FROM tasks
        WHERE id = $1
    `, [taskId]);    

}

export default {
    getTasks,
    addNewTask,
    findTaskById,
    updateTask,
    deleteTask
}