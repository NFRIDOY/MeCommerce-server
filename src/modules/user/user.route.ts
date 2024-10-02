import express from "express";
import { userControllers } from "./user.controller";

export const router = express.Router();

router.post("/create-admin", userControllers.createAdmin);

////////////////////////////////
/** Signup User */
router.post("/auth/signup", userControllers.createUser);
/** Login User */
// router.post("/auth/login", userControllers.userAccess);


