import { DataSource } from "typeorm";
import { Department } from "../entities/department";
import { Employee } from "../entities/employee";
import { Wage } from "../entities/wage";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "test",
  entities: [Department, Employee, Wage],
  logging: true,
  synchronize: true,
});

export { AppDataSource };
