const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const methodOverride = require("method-override");

dotenv.config();

connectDB();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const productRoutes = require("./routes/productRoutes");
app.use("/", productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server Running on Port ${PORT}`);

});