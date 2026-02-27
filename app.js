const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db")
// const authRoutes = require("./routes/auth.routes")
const billingRoutes = require("./routes/billing.routes")

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/api/auth", authRoutes);
app.use("/api/billing", billingRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));