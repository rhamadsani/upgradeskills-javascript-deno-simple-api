import type { Context } from "https://deno.land/x/abc@v1.3.2/mod.ts";

import {
    getAllSahamModel,
    getSahamModel,
    addSahamModel,
} from "../models/saham.ts";

export const getAllSahams = async (ctx: Context) => {
    return ctx.json(await getAllSahamModel());
}

export const getSaham = async (ctx: Context) => {
    const { id } = ctx.params;
    return ctx.json(await getSahamModel(parseInt(id)));

}

export const addSaham = async (ctx: Context) => {
    const body  = await ctx.body;
    const body2 = ctx.body;

    console.log(body,body2)
    if(!body){
        return ctx.json({
            'status': 'error', 
            'message': 'body required name & company'
        },422);
    }
    body.throw new Error("");
    
    // const {name, company} = body;
    // console.log(name, company);
    const newSaham = await addSahamModel({name:'1', company:'1'});

    return ctx.json(newSaham)
}

// export const delete_book = (ctx: Context) => {
    
// }