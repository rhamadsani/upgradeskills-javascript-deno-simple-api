import client from "./config.ts";

interface User {
    id?: number;
    name: string;
    email: string;
    password: string;
}

async function addUserModel(user: User){
    const newUser = `INSERT INTO saham('id', 'name', 'email', 'password') values(`+[saham]+`)`;

    return await client.execute(newUser);
}

async function getUsers() {
    return await client.query(`select * from users`);
}

export {
    addUserModel,
    getUsers,
}