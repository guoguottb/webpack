const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"), //路径
    filename: "main.js",
  },
};
