import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1682687936799 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "user" (
                "id" SERIAL NOT NULL PRIMARY KEY,
                "email" VARCHAR(255) NOT NULL,
                "password" VARCHAR(255) NOT NULL,
                "phone" VARCHAR(255) NULL,
                "img_profile" VARCHAR(255) NULL,
                "confirmation_user" BOOLEAN NOT NULL DEFAULT false
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "user";
        `);
    }

}
