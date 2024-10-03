import { z } from "zod";
import { USER_Role } from "./user.constants";

const updateUserValidations = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    phone: z.string(),
    role: z.nativeEnum(USER_Role),
    address: z.string()
});

export const UserValidations = {
    updateUserValidations,
};
