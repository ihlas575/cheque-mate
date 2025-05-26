import { DataTypes } from "sequelize";
import db from "../config/database.js";

const User = db.define(
    "User",
    {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 25],
            },
        },

        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true,
                len: [0, 255],
            },
        },

        phone: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        avatar: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            allowNull: false,
        },
    },

    {
        timestamps: true,
    }
);

export default User;
