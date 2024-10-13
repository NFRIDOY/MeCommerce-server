import express, { Request, Response } from "express";
import cors from "cors";
import { globalErrorHandler, notFound } from "./middlewares";
import { AuthRoutes } from "./modules/auth/auth.route";
import { UserRoutes } from "./modules/user/user.route";
import { FacilityRouters } from "./modules/Facility/facility.route";
import cookieParser from "cookie-parser";
import { BookingRouters } from "./modules/Booking/Booking.route";
const app = express();
const rootLink = `http://localhost:5000`;
// const rootLink = `https://sports-facility-booking-platform-server-ten.vercel.app`;

// Define CORS options
const corsOptions: cors.CorsOptions = {
    // origin: "http://localhost:5173", // Allow only this origin // Before Deployment
    origin: [
        "http://localhost:5173",
        "http://localhost:3000",
        "https://recipi-iota.vercel.app/",
    ], // Allow only this origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true, // Allow cookies to be sent
};

// Use CORS middleware with options
app.use(cors(corsOptions));

//parsers
app.use(express.json());
app.use(cookieParser());

/** Routers */
app.use("/api/auth", AuthRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/facility", FacilityRouters);
app.use("/api/check-availability", FacilityRouters);
app.use("/api/bookings", BookingRouters);

/** Root Routers */
app.get("/", (req: Request, res: Response) => {
    res.send("Sports Facility Booking Platfrom Server is Running");
});
app.get("/api", (req: Request, res: Response) => {
    res.send(`Welcome To Sports Facility Booking Platfrom Server API Documentation <br />
        * Available APIs * <br />
        [GET] => ${rootLink}/api/users  <br />
        [GET] => ${rootLink}/api/facility  <br />
        `);
});
app.get("/vercel", (req: Request, res: Response) => {
    if (process.env.VERCEL) {
        // eslint-disable-next-line no-console
        console.log("This project is running on Vercel!");
        res.send(
            "Sports Facility Booking Platfrom Server is Running on Vercel!"
        );
    } else {
        // eslint-disable-next-line no-console
        console.log("This project is not running on Vercel.");
        res.send(
            "Sports Facility Booking Platfrom Server is not Running on Vercel!"
        );
    }
});

// "Not Found" middleware
app.use(notFound);

// Error-handling middleware
app.use(globalErrorHandler);

export default app;
