import type { Context } from "https://deno.land/x/abc@v1.3.2/mod.ts";

import {
    getAllBooksModel,
    getBookModel
} from "../models/books.ts";

export const getAllBooks = async (ctx: Context) => {
    // const data = await getAllBooksModel();
    return ctx.json(await getAllBooksModel());
}

export const getBook = async (ctx: Context) => {
    const { id } = ctx.params;
    return ctx.json(await getBookModel(parseInt(id)));

}

// export const create_book = (ctx: Context) => {
    
// }

// export const delete_book = (ctx: Context) => {
    
// }