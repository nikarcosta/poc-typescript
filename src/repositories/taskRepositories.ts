import connectionDb from "../config/database.js";

async function getTasks() {

    return await connectionDb.query(`
        SELECT * FROM tasks;
    `);
}

export default {
    getTasks
}