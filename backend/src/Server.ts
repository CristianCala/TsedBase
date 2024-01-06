import {join} from "path";
import {Configuration,Inject} from "@tsed/di";
import {PlatformApplication} from "@tsed/common";
import "@tsed/platform-express"; // /!\ keep this import
import "@tsed/ajv";
import "@tsed/swagger";
import "@tsed/typeorm";
import {config} from "./config/index";
import * as rest from "./controllers/rest/index";
import * as pages from "./controllers/pages/index";
import { DefaultRoleService } from "./services/DefaultRoleService";
import {User} from "./entities/UserEntity";
import {Role} from "./entities/RoleEntity";
import {PersonalData} from "./entities/PersonalDataEntity";
import {SocialMedia} from "./entities/SocialMediaEntity";
import {Vaccine} from "./entities/VaccineEntity";
import {Passport} from "./entities/PassportEntity";
import {Sport} from "./entities/SportEntity";
import {Measurement} from "./entities/MeasurementEntity";
import {PersonalDataSocialMedia} from "./entities/PersonalDataSocialMediaEntity";
import {PersonalDataVaccine} from "./entities/PersonalDataVaccine";
import {Event} from "./entities/EventEntity";


@Configuration({
    ...config,
    acceptMimes: ["application/json"],
    httpPort: process.env.NODE_PORT,
    httpsPort: false, // CHANGE
    disableComponentsScan: true,
    mount: {
        "/rest": [
            ...Object.values(rest)
        ],
        "/": [
            ...Object.values(pages)
        ]
    },
    swagger: [
        {
            path: "/doc",
            specVersion: "3.0.1",
            spec: {
                security: [
                    {
                        bearerAuth: []
                    }
                ],
                components: {
                    securitySchemes: {
                        bearerAuth: {
                        type: "http",
                        scheme: "bearer",
                        bearerFormat: "JWT"
                        }
                    }
                }
            }
        }
    ],
    middlewares: [
        "cors",
        "cookie-parser",
        "compression",
        "method-override",
        "json-parser",
        {
            use: "urlencoded-parser",
            options: {
                extended: true
            }
        }
    ],
    views: {
        root: join(process.cwd(), "../views"),
        extensions: {
            ejs: "ejs"
        }
    },
    exclude: [
        "**/*.spec.ts"
    ],
    typeorm: [
        {
            name: "default",
            type: "postgres",
            host: process.env.POSTGRES_HOST,
            port: 5432,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            entities: [
                User,
                Role,
                PersonalData,
                SocialMedia,
                Vaccine,
                Passport,
                Sport,
                Measurement,
                PersonalDataSocialMedia,
                PersonalDataVaccine,
                Event
            ],
            migrations: [`./src/migrations/*{.ts,.js}`],
            subscribers: [`./subscriber/*{.ts,.js}`],
        },
    ]
})

export class Server {
    @Inject()
    protected app: PlatformApplication;

    @Configuration()
    protected settings: Configuration;

    async $beforeListen(): Promise<any> {
        const defaultRoleService = new DefaultRoleService();
        await defaultRoleService.create();
    
        return null;
    }
}