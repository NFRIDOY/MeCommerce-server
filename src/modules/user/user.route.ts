import express from "express";
import { userControllers } from "./user.controller";

const router = express.Router();

// router.post("/create-admin", userControllers.createUser);

////////////////////////////////
/** Signup User */
router.post("/signup", userControllers.createUser);
/** Login User */
// router.post("/login", userControllers.userAccess);


export const UserRoutes = router;

