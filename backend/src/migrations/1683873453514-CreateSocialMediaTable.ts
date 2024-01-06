import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateSocialMediaTable1683873453514 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "social_media" (
                "id" SERIAL NOT NULL PRIMARY KEY,
                "name" VARCHAR(255) NOT NULL,
                "url" VARCHAR(255) NOT NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "social_media";
        `);
    }
}
