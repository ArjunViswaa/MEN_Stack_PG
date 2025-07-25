const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path");
const { products } = require("./admin");

router.get("/", (req, res, next) => {
    // res.send('<h1>Hello from Express!!</h1>');
    // console.log(products);
    // res.sendFile(path.join(rootDir, "views", "shop.html"));
    res.render("shop");
});

module.exports = router;