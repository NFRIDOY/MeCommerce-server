import dotenv from "dotenv";
dotenv.config();

export default {
    port: process.env.PORT,
    db_url: process.env.DB_URL,
    salt_round: process.env.salt_round,
    NODE_ENV: "development",
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
    jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
};
