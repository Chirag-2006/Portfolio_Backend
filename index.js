require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const projectRoute = require("./router/project-router");
const adminRoute = require("./router/admin-router");
const connectDB = require("./utils/db");
const { errorMiddleware } = require("./middlewares/error-middleware");
const cors = require("cors");
// middleware
app.use(cors(
    {
        origin: "http://localhost:5173",  
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"]
    }
));
app.use(express.json());

// routes for visiting the pages
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data",projectRoute);

// routes for admin
app.use("/api/admin", adminRoute);


// error middleware
app.use(errorMiddleware);


// database connection
connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Example app listening at http://localhost:${process.env.PORT}`);
    });
});
