import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";

import routes from "./routes";
import errorHandler from "./helpers/errorHandler";
import { PORT } from "./config";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  const error = errorHandler(err, req, res);
  res.json({ error: error.message });
});

const server = app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`)
);

export default server;
