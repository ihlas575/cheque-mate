import db from "./database.js";
import User from "../models/User.js";

try {
    await db.sync({ force: true });
    console.log("All models synced successfully!");
} catch (error) {
    console.error("Error syncing models:", error);
}
