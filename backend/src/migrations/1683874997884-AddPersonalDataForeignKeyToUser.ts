import { MigrationInterface, QueryRunner } from "typeorm"

export class AddPersonalDataForeignKeyToUser1683874997884 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD COLUMN "personal_data_id" integer REFERENCES "personal_data" ("id")
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
            DROP COLUMN "personal_data_id"
        `);
    }
}
