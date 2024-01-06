import { MigrationInterface, QueryRunner } from "typeorm"

export class AddRoleForeignKeyToUser1683872937832 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD COLUMN "role_id" integer REFERENCES "role" ("role_id")
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
            DROP COLUMN "role_id"
        `);
    }

}
