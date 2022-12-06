//Required package
var pdf = require("pdf--node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("template.html", "utf8");