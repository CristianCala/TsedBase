import { MigrationInterface, QueryRunner } from "typeorm"

export class CreatePersonalDataSocialMedia1684963903636 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "personal_data_social_media" (
                "id" SERIAL PRIMARY KEY,
                "personal_data_id" INT NOT NULL REFERENCES "personal_data" ("id"),
                "social_media_id" INT NOT NULL REFERENCES "social_media" ("id")
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "personal_data_social_media";
        `);
    }

}
