import type { Context } from "https://deno.land/x/abc@v1.3.2/mod.ts";

export async function authorize(ctx: Context, next: any){
    const headers = await ctx.request.headers;
    console.log(headers);
}