import { DataSource } from "typeorm";
import { Department } from "../entities/department";
import { Employee } from "../entities/employee";
import { Wage } from "../entities/wage";

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.HOST_DATABASE,
  port: Number(process.env.PORT_DATABASE),
  username: process.env.USERNAME_DATAASE,
  password: process.env.PASSWORD_DATABASE,
  database: process.env.DATABASE_DATABASE,
  entities: [Department, Employee, Wage],
  logging: true,
  synchronize: true,
});

export { AppDataSource };
