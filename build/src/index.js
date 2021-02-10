"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
let port = 8080;
app.listen(port, () => {
    console.log(`now listening for requests on port ${port}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map