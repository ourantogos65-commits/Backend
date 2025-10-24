
import axios from "axios";
import express from "express";
import chalk from "chalk";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectDB } from "../db.js";
import { useRouter } from "./routers/user.js";



configDotenv();

const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json())

app.use("/student",useRouter)



app.listen(PORT, () => {
  connectDB()
  console.log(chalk.green(` Server is running at http://localhost:${PORT}`));
});
