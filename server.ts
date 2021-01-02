import express from "express";
import { connectDB } from "./config/db";
import { user } from "./src/routes/api/users";
const app: any = express();

connectDB(); //connect to db
interface ExJson {
  extended: boolean;
}

//init middleware
app.get(express.json());
//define routes
app.use("/api/users", require("./src/routes/api/users"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
