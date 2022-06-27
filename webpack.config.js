const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"), //路径
    filename: "main.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  //模块
  module: {
    //规则是个数组 里面加对象
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  //配置server 服务器端口和启动serve 自动打开网页
  devServer: {
    //配置端口
    // port: 3000,
    open: true,
  },
};
