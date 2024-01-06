import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateSportTable1683873935068 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "sport" (
                "sport_id" SERIAL NOT NULL PRIMARY KEY,
                "activity" VARCHAR(255) NOT NULL,
                "discipline" VARCHAR(255) NOT NULL,
                "category" VARCHAR(255) NOT NULL,
                "level" VARCHAR(255) NOT NULL,
                "other" VARCHAR(255) NULL,
                "disability" VARCHAR(255) NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "sport";
        `);
    }

}
