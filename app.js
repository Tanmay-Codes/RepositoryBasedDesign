import express from "express";
import { config } from "dotenv";
import ErrorHandlerMiddleware from "./middleware/Error.js";

config({
  path: "./config/config.env",
});

const app = express();
//using middlewares
app.use(express.json()); //parse request body as json
app.use(
  express.urlencoded({
    extended: true,
  })
);

// importing routes
import auth from "./routes/authRoute.js";

app.use("/api/v1", auth);

app.use(ErrorHandlerMiddleware);
export default app;
