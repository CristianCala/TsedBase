import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateRoleTable1683871977377 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "role" (
                "role_id" SERIAL NOT NULL PRIMARY KEY,
                "name" VARCHAR(255) NOT NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "role";
        `);
    }

}
