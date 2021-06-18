import { AbstractMigration, Info, ClientMySQL } from "https://deno.land/x/nessie@2.0.0-rc4/mod.ts";

export default class extends AbstractMigration<ClientMySQL> {
    /** Runs on migrate */
    async up(_info: Info): Promise<void> {
        await this.client.query(
            "CREATE TABLE updowns ("+
            "id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, "+
            "saham_id INT(6) UNSIGNED NOT NULL, "+
            "open_price VARCHAR(20), "+
            "close_price VARCHAR(20), "+
            "low_price VARCHAR(20), "+
            "hight_price VARCHAR(20), "+
            "last_price VARCHAR(20), "+
            "vol VARCHAR(20), "+
            "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, "+
            "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, "+
            "FOREIGN KEY (saham_id) REFERENCES saham(id) " +
            ")"
        );
    }

    /** Runs on rollback */
    async down(_info: Info): Promise<void> {
        await this.client.query("DROP TABLE updowns");
    }
}
