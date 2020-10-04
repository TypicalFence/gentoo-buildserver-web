require("dotenv").config();
const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// express config
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// express middleware
app.use(require("morgan")("tiny"));
app.use(express.static("public"));
app.use(require("body-parser").urlencoded({ extended: true }));

// routing
const frontendRoutes = require("./src/routes/frontend.js");

app.use("/", frontendRoutes);

(async() => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
})();
