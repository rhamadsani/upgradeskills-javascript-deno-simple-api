import { AbstractMigration, Info, ClientMySQL } from "https://deno.land/x/nessie@2.0.0-rc4/mod.ts";

export default class extends AbstractMigration<ClientMySQL> {
    /** Runs on migrate */
    async up(_info: Info): Promise<void> {
        await this.client.query(
            "CREATE TABLE saham ("+
            "id INT(6) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, "+
            "name TEXT NOT NULL , "+
            "company VARCHAR(255) NOT NULL , "+
            "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, "+
            "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP "+
            ")"
        ); 
    }

    /** Runs on rollback */
    async down(_info: Info): Promise<void> {
        await this.client.query('DROP TABLE saham')
    }
}
