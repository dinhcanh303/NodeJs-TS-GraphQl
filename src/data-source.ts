require("dotenv").config();
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Post } from "./models/Post";
import { User } from "./models/User";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_POSTGRESQL_HOST,
  port: Number(process.env.DB_POSTGRESQL_PORT),
  username: process.env.DB_POSTGRESQL_USERNAME,
  password: process.env.DB_POSTGRESQL_PASSWORD,
  database: process.env.DB_POSTGRESQL_DB_NAME,
  synchronize: true,
  logging: true,
  entities: [User, Post],
});
