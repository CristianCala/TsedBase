import { MigrationInterface, QueryRunner } from "typeorm"

export class CreatePersonalDataVaccine1685976257348 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "personal_data_vaccine" (
                "id" SERIAL PRIMARY KEY,
                "personal_data_id" INT NOT NULL REFERENCES "personal_data" ("id"),
                "vaccine_id" INT NOT NULL REFERENCES "vaccine" ("id")
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "personal_data_vaccine";
        `);
    }
}
