import express, { Request, Response } from "express";
import cors from "cors";
import { globalErrorHandler, notFound } from "./middlewares";
const app = express();

// Define CORS options
const corsOptions: cors.CorsOptions = {
    origin: "http://localhost:5173", // Allow only this origin
    // origin: "http://localhost:5173", // Allow only this origin // Before Deployment
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true, // Allow cookies to be sent
};

// Use CORS middleware with options
app.use(cors(corsOptions));

//parsers
app.use(express.json());

// app.use("/api/products", ProductRouters);

app.get("/", (req: Request, res: Response) => {
    res.send("Sports Facility Booking Platfrom Server is Running");
});

// "Not Found" middleware
app.use(notFound);

// Error-handling middleware
app.use(globalErrorHandler);

export default app;
