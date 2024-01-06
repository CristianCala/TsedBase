import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateEventsTable1683873669000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "event" (
                "id" SERIAL NOT NULL PRIMARY KEY,
                "name" VARCHAR(255) NOT NULL,
                "departure_date" DATE NOT NULL,
                "arrival_date" DATE NOT NULL,
                "return_date" DATE NOT NULL,
                "flight_number" VARCHAR(255) NOT NULL,
                "departure_country" VARCHAR(255) NOT NULL,
                "destination_country" VARCHAR(255) NOT NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS event;
        `);
    }
}
