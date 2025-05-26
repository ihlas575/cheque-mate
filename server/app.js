import express, { urlencoded } from "express";
import dotenv from "dotenv";
import db from "./config/database.js";
import userRoutes from "./routes/user-routes.js";
import handleError from "./middleware/error.js";

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use("/api/users", userRoutes);

app.use(handleError);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost::${PORT}`);
});
