import client from './config.ts';


export interface UpDown {
    sahamId: number;
    openPrice: string;
    closePrice: string;
    lowPrice: string;
    hightPrice: string;
    lastPrice: string;
    vol: string;
}
async function getSahamIndexModel(sahamId: number) {
    return await client.query(`select * from updowns where saham_id=`+sahamId);
}
async function getIndexModel(id:number) {
    return await client.query(`select * from updowns where id=`+id);
}

async function addIndexModel(updown: UpDown) {
    return await client.execute(`insert into updowns(saham_id, open_price, close_price, low_price, hight_price, last_price, vol) values(?,?,?,?,?,?,?)`,[
        updown.sahamId,
        updown.openPrice,
        updown.closePrice,
        updown.hightPrice, 
        updown.lowPrice,
        updown.lastPrice,
        updown.vol
    ]);
}


async function updateIndexModel(id: number, updown: UpDown){
    return await client.execute(`update updowns set saham_id = ?, open_price = ?, close_price = ?, low_price = ?, hight_price = ?, last_price = ?, vol = ?, updated_at = ? where id = ?`,[
        updown.sahamId,
        updown.openPrice,
        updown.closePrice,
        updown.hightPrice, 
        updown.lowPrice,
        updown.lastPrice,
        updown.vol,
        new Date(),
        id
    ]);
}
async function deleteIndexModel(id: number){
    return await client.execute(`delete from updowns where id = ?`, [
        id
    ]);
}

export {
    getSahamIndexModel,
    getIndexModel,
    addIndexModel, 
    updateIndexModel, 
    deleteIndexModel,
}