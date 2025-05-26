import { Router } from "express";
import User from "../models/User.js";
import Joi from "joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const userRoutes = Router();
const userSchema = Joi.object({
    fullName: Joi.string().trim().min(3).max(25).required().messages({
        "any.required": "Full Name is required",
        "string.empty": "Full Name cannot be empty",
        "string.min": "Full Name must be at least 3 characters",
        "string.max": "Full name must not exceed 25 characters",
    }),

    email: Joi.string().trim().email().max(255).required().messages({
        "any.required": "Email Address is required",
        "string.empty": "Email Address cannot be empty",
        "string.email": "Please enter a valid email format",
        "string.max": "Email Address must not exceed 255 characters",
    }),

    phone: Joi.number().optional().empty("").messages({
        "number.base": "Phone number must be a valid numeric value",
    }),

    password: Joi.string().min(6).required().messages({
        "any.required": "Password is required",
        "string.empty": "Password cannot be empty",
        "string.min": "Password must be at least 6 characters long",
    }),

    avatar: Joi.string().optional().empty(""),
});

userRoutes.get("/", async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        next(error);
    }
});

userRoutes.get("/:id", async (req, res, next) => {
    const id = req.params.id;

    try {
        const user = await User.findByPk(id);

        if (!user) {
            res.send({ message: "Requested user could not be found" });
        }

        res.send(user);
    } catch (error) {
        next(error);
    }
});

userRoutes.post("/", async (req, res, next) => {
    try {
        const validatedData = await userSchema.validateAsync(req.body);
        validatedData.password = await bcrypt.hash(validatedData.password, 10);
        await User.create(validatedData);

        res.status(201).json({ message: "Your account has been successfully created" });
    } catch (error) {
        if (error.details) {
            res.send({ message: error.details[0].message });
        } else if (error.name === "SequelizeUniqueConstraintError") {
            res.send({ message: "This email has already been taken" });
        } else {
            next(error);
        }
    }
});

userRoutes.put("/:id", async (req, res, next) => {
    try {
        const id = await req.params.id;
        const data = await req.body;

        const validatedData = await userSchema.validateAsync(data);

        await User.update(validatedData, {
            where: {
                id: id,
            },
        });

        res.send("User Updated");
    } catch (error) {
        if (error.details) {
            res.send({ message: error.details[0].message });
        }

        next(error);
    }
});

userRoutes.delete("/:id", async (req, res, next) => {
    const id = req.params.id;

    try {
        const response = await User.destroy({
            where: {
                id: id,
            },
        });

        if (response) {
            res.send({ message: "Your account has been successfully deleted" });
        } else {
            res.send({ message: "No matching user record was found" });
        }
    } catch (error) {
        next(error);
    }
});

userRoutes.post("/authenticate", async (req, res, next) => {
    try {
        const { email, password } = await req.body;
        const userDetails = await User.findOne({
            where: {
                email: email,
                isActive: 1,
            },
        });

        const isPasswordMatched = await bcrypt.compare(
            password,
            userDetails.password
        );

        if (userDetails && isPasswordMatched) {
            const authToken = jwt.sign({ userDetails }, process.env.JWT_KEY, {
                expiresIn: "1d",
            });
            res.send({
                authToken: authToken,
                message: "Successfully logged in",
            });
        } else {
            res.send({ message: "Provided credential are wrong! Please try again!" });
        }
    } catch (error) {
        next(error);
    }
});

export default userRoutes;
