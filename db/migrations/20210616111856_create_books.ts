import { AbstractMigration, Info, ClientMySQL } from "https://deno.land/x/nessie@2.0.0-rc4/mod.ts";

export default class extends AbstractMigration<ClientMySQL> {
    /** Runs on migrate */
    async up(_info: Info): Promise<void> {
        await this.client.query(
            "CREATE TABLE books ("+
            "id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, "+
            "title text, "+
            "author varchar(255), "+
            "page int(100) "+
            ")"
        ); 
    }

    /** Runs on rollback */
    async down(_info: Info): Promise<void> {
        await this.client.query("DROP TABLE books");
    }
}
