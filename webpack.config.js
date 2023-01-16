const path = require("path");
const HTMLWebplagin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin"); // optimize image

const mode = process.env.NODE_ENV || "production";
const isDev = mode === "development";

module.exports = {
  mode: mode,
  entry: { main: "./src/index.tsx", analytics: "./src/analitycs.ts" },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: path.join("[name].[hash][ext]"),
    clean: true,
  },
  resolve: {
    extensions: [".jsx", ".svg", ".js", ".json", "scss", "css", ".tsx", ".ts"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
      components: path.resolve(__dirname, "../src/components"),
    },
  },
  plugins: [
    new HTMLWebplagin({
      template: "./public/index.html",
      minify: { collapseWhitespace: !isDev },
    }),
    new MiniCssExtractPlugin({ filename: "[name].[hash].css" }),
  ],
  devtool: isDev ? "source-map" : undefined,
  devServer: {
    watchFiles: path.join(__dirname, "src"),
    port: 9000,
  },
  optimization: {
    splitChunks: { chunks: "all" },
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              ["svgo", { name: "preset-default" }],
            ],
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: "asset",
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(js|ts|jsx|tsx)$/i,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
