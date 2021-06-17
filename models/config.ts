import { Client } from "https://deno.land/x/mysql@v2.9.0/mod.ts";
const client = await new Client().connect({
  hostname: "127.0.0.1",
  username: "root",
  db: "nessie",
  password: "",
});

export default client;