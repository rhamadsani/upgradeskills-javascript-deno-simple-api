import client from "./config.ts";

export interface Saham {
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

async function updateSahamModel(id: number, saham: Saham) {
    return await client.execute(`UPDATE saham set name = ?, company = ?, updated_at = ? WHERE id = ?`, [
        saham.name, 
        saham.company,
        new Date(),
        id,
    ])
}

async function deleteSahamModel(id:number) {
    return await client.execute(`DELETE FROM saham WHERE id = ?`, [
        id
    ]);
}

export {
    addSahamModel, 
    getAllSahamModel,
    getSahamModel,
    updateSahamModel,
    deleteSahamModel
}