import { AbstractMigration, Info, ClientMySQL } from "https://deno.land/x/nessie@2.0.0-rc4/mod.ts";

export default class extends AbstractMigration<ClientMySQL> {
    /** Runs on migrate */
    async up(info: Info): Promise<void> {
    }

    /** Runs on rollback */
    async down(info: Info): Promise<void> {
    }
}
