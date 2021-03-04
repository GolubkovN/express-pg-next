import * as dotenv from "dotenv";

dotenv.config();

export default {
    APP: process.env.APP || "dev",
    PORT: process.env.PORT || "3000",

    DB_DIALECT: process.env.DB_DIALECT || "postgres",
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_NAME: process.env.DB_NAME || "api",
    DB_PASSWORD: process.env.DB_PASSWORD || "password",
    DB_PORT: process.env.DB_PORT || "5432",
    DB_USER: process.env.DB_USER || "me",

    JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || "jwt_key",
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || "1h",
    SALT_ROUNDS: process.env.SALT_ROUNDS || 10
} 