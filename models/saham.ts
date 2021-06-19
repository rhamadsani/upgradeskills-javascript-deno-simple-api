import client from "./config.ts";

interface Saham {
    // id? :number;
    name: string;
    company: string;
}

async function addSahamModel(saham: Saham){
    return  await client.execute("insert into saham(name,company) values(?,?)", [
        saham.name,
        saham.company,
      ]);
}
async function getAllSahamModel(){
    return await client.query(`select * from saham`);
}

async function getSahamModel(id:number) {
    return await client.query(`select * from saham where id=`+id);
}

export {
    addSahamModel, 
    getAllSahamModel,
    getSahamModel
}