import { MigrationInterface, QueryRunner } from "typeorm"

export class CreatePersonalDataTable1683874299290 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "personal_data" (
                "id" SERIAL PRIMARY KEY,
                "name" VARCHAR(255) NOT NULL,
                "second_name" VARCHAR(255) NOT NULL,
                "last_name" VARCHAR(255) NOT NULL,
                "second_last_name" VARCHAR(255) NOT NULL,
                "birthdate" DATE NULL,
                "age" INT NULL,
                "gender" VARCHAR(255) NULL,
                "birthplace" VARCHAR(255) NULL,
                "state" VARCHAR(255) NULL,
                "city" VARCHAR(255) NULL,
                "municipality" VARCHAR(255) NULL,
                "parish" VARCHAR(255) NULL,
                "identification_number" VARCHAR(255) NULL,
                "img_identification" VARCHAR(255) NULL,
                "birth_certificate_number" INT NULL,
                "img_birth_certificate" VARCHAR(255) NULL,
                "passport_id" INT NULL REFERENCES "passport" ("passport_id"),
                "sport_id" INT NULL REFERENCES "sport" ("sport_id"),
                "measurements_id" INT NULL REFERENCES "measurement" ("id"),
                "event_id" INT NULL REFERENCES "event" ("id")
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "personal_data";
        `);
    }
}
