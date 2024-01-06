import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateMeasurementsTable1683874092306 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "measurement" (
                "id" SERIAL NOT NULL PRIMARY KEY,
                "body_height" FLOAT NOT NULL,
                "body_weight" FLOAT NOT NULL,
                "flannel_size" VARCHAR(255) NOT NULL,
                "jacket_size" VARCHAR(255) NOT NULL,
                "pants_size" VARCHAR(255) NOT NULL,
                "shoe_size" VARCHAR(255) NOT NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "measurement";
        `);
    }
}
