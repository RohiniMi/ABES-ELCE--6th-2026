import express from "express";
import dbConnect from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { loggerMiddleware } from "./middlewares/loggerMiddleware.js";
import { errorHandlerMilldeware } from "./middlewares/errorHandlerMiddleware.js";
import { pathHandler } from "./middlewares/pathHandlerMiddleware.js";
import dotenv from "dotenv";
// dotenv.config()
const app = express();
const PORT = process.env.PORT;
app.use(express.json()); //built-in middleware
dbConnect();
app.use(loggerMiddleware); //application middleware

app.use("/", userRoutes);
app.use(errorHandlerMilldeware);
app.use(pathHandler)
app.listen(PORT, () =>
    console.log(`server is running at http://localhost:${PORT} `));