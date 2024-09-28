export type TRole = "admin" | "user";

export interface IUser {
    name: string;
    email: string;
    password: string;
    phone: string;
    role: TRole;
    address: string;
}
