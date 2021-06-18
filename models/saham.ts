import client from "./config.ts";

interface Saham {
    id? :number;
    name: string;
    company: string;
}

async function addSaham(saham: Saham){
    const query = `INSERT INTO saham('id', 'name', 'company') values(`+[saham]+`)`;
    return  await client.execute(query);
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