const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const ruleForStyles = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};

const ruleForJavascript = {
  test: /\.js$/,
  loader: "babel-loader",
  options: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
  },
};

const ruleForImages = {
  test: /\.(png|jpg|gif|svg|ico)$/,
  use: [
    {
      loader: "file-loader?name=[name].[ext]",
    },
  ],
};

const rules = [ruleForJavascript, ruleForStyles, ruleForImages];

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProducttion = mode === "production";

  return {
    entry: "./src/index.js",
    output: {
      filename: isProducttion ? "[name].[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "build"),
    },
    module: { rules },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
        favicon: "src/favicon.svg",
      }),
    ],
    devServer: {
      port: 3000,
      compress: true,
    },
    devtool: "source-map",
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
      },
    },
  };
};
