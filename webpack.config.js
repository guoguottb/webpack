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
      // css文件解析的配置
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // less 文件的配置
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      // 配置解析图片的
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            //匹配文件，尝试转为base64位字符串打包到js中
            loader: "url-loader",
            options: {
              limit: 8 * 1024,
            },
          },
        ],
      },
      //处理字体图标的
      {
        // 处理字体图标的解析
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 2 * 1024,
              // 配置输出的文件名
              name: "[name].[ext]",
              // 配置输出的文件目录
              outputPath: "fonts/",
            },
          },
        ],
      },
      // 代码降级
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // 预设:转码规则(用bable开发环境本来预设的)
          },
        },
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
