import client from "./config.ts";

interface Saham {
    id? :number;
    make: string;
    model: string;
    year: number;
};

async function addSaham(saham: Saham){
    // const newBook = de.queryBuilder().insert([book]).into("books").toString();
    return  await client.execute(`INSERT INTO users(name) values(`+[saham]+`)`, [
        "manyuanrong",
      ]);
}

async function getAllSahamModel(){
    return await client.query(`select * from saham`);
}

async function getSahamModel(id:number) {
    return await client.query(`select * from saham where id=`+id);
}
export {
    addSaham, 
    getAllSahamModel,
    getSahamModel
}