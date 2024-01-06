import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateVaccineTable1683873632358 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "vaccine" (
                "id" SERIAL NOT NULL PRIMARY KEY,
                "type" VARCHAR(255) NOT NULL,
                "date_applied" DATE NOT NULL,
                "img_vaccine" VARCHAR(255) NOT NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "vaccine";
        `);
    }
}
