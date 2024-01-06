import {registerProvider} from "@tsed/di";
import {DataSource} from "typeorm";
import {Logger} from "@tsed/logger";

export const TYPEORM_DATA_SOURCE = Symbol.for("TypeormDataSource");
export const TypeormDataSource = new DataSource({
  name: "default",
  type: "postgres",
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'C9aQ2dZXj9%bty2D',
  database: 'atletas',
  entities: [`./entity/*{.ts,.js}`],
  migrations: [`./migrations/*{.ts,.js}`],
});

registerProvider<DataSource>({
  provide: TYPEORM_DATA_SOURCE,
  type: "typeorm:datasource",
  deps: [Logger],
  async useAsyncFactory(logger: Logger) {
    await TypeormDataSource.initialize();

    logger.info("Connected with typeorm to database: TypeormDatasource");

    return TypeormDataSource;
  },
  hooks: {
    $onDestroy(dataSource) {
      return dataSource.isInitialized && dataSource.close();
    }
  }
});
