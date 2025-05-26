import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    }
);

(async () => {
    try {
        await db.authenticate();
        console.log("Database connection established.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();

export default db;
