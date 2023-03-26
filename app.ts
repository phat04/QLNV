import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./databases/data";
import employeeRouter from "./routes/employee";
import departmentRouter from "./routes/department";
import wageRouter from "./routes/wage";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { notFoundRoute } from "./middlewares/notFoundRoute";
import { errorHandlerMiddleware } from "./middlewares/error-handler";

const app = express();

app.use(express.json());
// Use morgan to log requests
app.use(morgan("combined"));
// Use cors to enable Cross-Origin Resource Sharing
app.use(cors());
// Use helmet for security
app.use(helmet());
app.use(compression());

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/employee", employeeRouter);
app.use("/department", departmentRouter);
app.use("/wage", wageRouter);
app.use(errorHandlerMiddleware);
app.use(notFoundRoute);

app.listen(3000, () => {
  console.log("The server is running on port 3000");
});
