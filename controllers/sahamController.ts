import type { Context } from "https://deno.land/x/abc@v1.3.2/mod.ts";
import {
    getAllSahamModel,
    addSahamModel,
    updateSahamModel,
    deleteSahamModel,
    Saham,
} from "../models/saham.ts";

export const getAllSahams = async (ctx: Context) => {
    return ctx.json(await getAllSahamModel());
}

export const getSaham = async (ctx: Context) => {
    const { id } = ctx.params;
    const { length } = ctx.queryParams;

    const response = await fetch("https://idx.co.id/umbraco/Surface/ListedCompany/GetTradingInfoSS?code="+id+"&length="+length);

    return ctx.json(await response.json());
}

export const addSaham = async (ctx: Context) => {

    const {name, company}  = await ctx.body as Saham;
    if(!name || !company){
        return ctx.json({
            'status': 'error', 
            'message': 'body required key name & company'
        },422);
    }

    if(name == '' && company == ''){
        return ctx.json({
            'status': 'error', 
            'message': 'body required name & company'
        },422);
    }

    return ctx.json(await addSahamModel({name, company}))
}

export const updateSaham = async (ctx: Context) => {
    const { id } = ctx.params;
    const { name, company } = await ctx.body as Saham;
    if(!name || !company){
        return ctx.json({
            'status': 'error', 
            'message': 'body required key name & company'
        },422);
    }
    if(name == '' && company == ''){
        return ctx.json({
            'status': 'error', 
            'message': 'body required value name & company'
        },422);
    }
    return ctx.json(await updateSahamModel(parseInt(id), {name, company}));
}

export const deleteSaham = async (ctx: Context) => {
    const { id } = ctx.params;

    return ctx.json(await deleteSahamModel(parseInt(id)));
}