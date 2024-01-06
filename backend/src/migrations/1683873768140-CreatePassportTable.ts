import { MigrationInterface, QueryRunner } from "typeorm"

export class CreatePassportTable1683873768140 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "passport" (
                "passport_id" SERIAL NOT NULL PRIMARY KEY,
                "passport" VARCHAR(255) NOT NULL,
                "passport_issue_date" DATE NOT NULL,
                "passport_expiration_date" DATE NOT NULL,
                "img_passport" VARCHAR(255) NOT NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "passport";
        `);
    }

}
