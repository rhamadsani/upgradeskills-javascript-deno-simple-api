import client from "./config.ts";

export interface User {
    name: string;
    email: string;
    password: string;
}

async function addUserModel(user: User){
    const newUser = "INSERT INTO users(name, email, password) values(?,?,?)";

    return await client.execute(newUser,[
        user.name,
        user.email, 
        user.password
    ]);
}

async function getUsers() {
    return await client.query(`select * from users`);
}

export {
    addUserModel,
    getUsers,
}