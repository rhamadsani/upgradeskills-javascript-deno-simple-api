import type { Context } from "https://deno.land/x/abc@v1.3.2/mod.ts";

import {
    getAllSahamModel,
    getSahamModel
} from "../models/saham.ts";

export const getAllSahams = async (ctx: Context) => {
    return ctx.json(await getAllSahamModel());
}

export const getBook = async (ctx: Context) => {
    const { id } = ctx.params;
    return ctx.json(await getSahamModel(parseInt(id)));

}

// export const create_book = (ctx: Context) => {
    
// }

// export const delete_book = (ctx: Context) => {
    
// }