import type { Context } from "https://deno.land/x/abc@v1.3.2/mod.ts";

import {
    getSahamIndexModel,
    getIndexModel, 
    addIndexModel,
    updateIndexModel,
    deleteIndexModel,
    UpDown,
} from'../models/updown.ts';


export const getSahamIndex = async (ctx: Context) => {
    const { sahamId } =  ctx.params;
    return ctx.json(await getSahamIndexModel(parseInt(sahamId)));
}
export const getIndex = async (ctx: Context) => {
    const { id } = ctx.params;
    return ctx.json(await getIndexModel(parseInt(id)));
}

export const addIndex = async (ctx: Context) => {
    const {
        sahamId,
        openPrice,
        closePrice,
        lowPrice,
        hightPrice,
        lastPrice,
        vol
    } = await ctx.body as UpDown;

    if(!sahamId){
        return ctx.json({
            'status': 'error', 
            'message': 'body required key sahamId'
        },422);
    }
    if(sahamId == 0){
        return ctx.json({
            'status': 'error', 
            'message': 'body required value sahamId'
        },422);
    }

    return ctx.json(await addIndexModel({sahamId,
        openPrice,
        closePrice,
        lowPrice,
        hightPrice,
        lastPrice,
        vol}))
}

export const updateIndex = async (ctx: Context) => {
    const { id } =  ctx.params;
    const {
        sahamId,
        openPrice,
        closePrice,
        lowPrice,
        hightPrice,
        lastPrice,
        vol
    } = await ctx.body as UpDown;

    return await ctx.json(await updateIndexModel(parseInt(id),{
        sahamId,
        openPrice,
        closePrice,
        lowPrice,
        hightPrice,
        lastPrice,
        vol
    }))
}

export const deleteIndex = async (ctx: Context) => {
    const { id } = ctx.params;

    return await(deleteIndexModel(parseInt(id)));
}