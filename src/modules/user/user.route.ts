import express from "express";
import { userControllers } from "./user.controller";
import { auth } from "../../middlewares/auth";
import { USER_Role } from "./user.constants";

const router = express.Router();

// router.post("/create-admin", userControllers.createUser);

////////////////////////////////
/** Signup User */
// router.post("/signup", userControllers.createUser);
/** Login User */
// router.post("/login", userControllers.userAccess);

/**
 * User Management:
User List Page: Display all users with options to create, edit, or delete users.
User Detail Page: View and modify user details.
*/
/**  Users by admin GET */
router.get("/", auth(USER_Role.admin), userControllers.getUsers);

/** getUser By ID GET */
router.get("/:id", auth("user", "admin"), userControllers.getUserById);

//! Testing
// router.get("/", userControllers.getUsers);

export const UserRoutes = router;
