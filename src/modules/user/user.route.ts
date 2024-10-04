import express from "express";
import { userControllers } from "./user.controller";

const router = express.Router();

// router.post("/create-admin", userControllers.createUser);

////////////////////////////////
/** Signup User */
router.post("/signup", userControllers.createUser);
/** Login User */
// router.post("/login", userControllers.userAccess);

/** testing User GET */
//! Testing
router.get("/", userControllers.getUsers);

export const UserRoutes = router;
