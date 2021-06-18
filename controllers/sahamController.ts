import type { Context } from "https://deno.land/x/abc@v1.3.2/mod.ts";

import {
    getAllSahamModel,
    getSahamModel,
    addSaham,
} from "../models/saham.ts";

export const getAllSahams = async (ctx: Context) => {
    return ctx.json(await getAllSahamModel());
}

export const getBook = async (ctx: Context) => {
    const { id } = ctx.params;
    return ctx.json(await getSahamModel(parseInt(id)));

}

export const createSaham = async (ctx: Context) => {
    const body = await ctx.body;
    if(!body){
        return ctx.json({
            'status': 'error', 
            'message': 'body required email & password'
        },422);
    }
    const newSaham = await addSaham(body);
}

// export const delete_book = (ctx: Context) => {
    
// }