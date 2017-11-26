var config = require("./rollup-config.js");

config.output.format = 'umd';
config.external = [];
module.exports = config;