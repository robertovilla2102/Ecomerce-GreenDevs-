import winston from "winston";
import path from "path";

const logDir = path.resolve(__dirname, "..", "logs");

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      level: "error",
      filename: path.join(logDir, "error.log"),
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
    }),
    new winston.transports.File({
      level: "info",
      filename: path.join(logDir, "combined.log"),
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

export default logger;
