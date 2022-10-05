const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const app = express();
require("dotenv").config();
app.use(serveStatic(path.join(__dirname, "dist")));
const port = process.env.PORT || 9090;
app.listen(port, () => {
  console.log(`listen on port ${process.env.PORT}`);
});
