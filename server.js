const express = require("express");
const serveStatic = require("serve-static");
const history = require("connect-history-api-fallback");

let app = express();
app.use(history());
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 3000;
app.listen(port);
