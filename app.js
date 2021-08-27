// requires //
const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const cookies = require("cookie-parser");
const methodOverride = require("method-override");
const mainRoutes = require("./src/routes/mainRoutes");


// localhost //
app.listen(process.env.PORT || 3000, function(){
    console.log("Server running in port 3000");
});

// routes //
app.use(express.static(path.join(__dirname, "./public")));
app.use("/", mainRoutes);

// views //
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

