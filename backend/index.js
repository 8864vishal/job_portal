import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import companyRoute from "./routes/company.route.js";
import userRoute from "./routes/user.route.js";
import connectDB from "./utils/db.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:5175',
    credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

// API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);

// Start server
app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
});
