import * as path from "path";
import * as webpack from "webpack";
// import HtmlWebpackPlugin from "html-webpack-plugin";
import alias from "./configs/paths.webpack";
import nodeExternals from "webpack-node-externals";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

class Settings {
  static entry_file = "./src/index.tsx";
  static html_template = "./public/index.html";
  static output_dir = "dist";
  static extensions: string[] = [".ts", ".tsx", ".js", ".json"];
  static bundlename = "[name].js";
  static mode: "production" = "production";
  static stats: "errors-only" = "errors-only";
  static libraryTarget: "umd";
}

const config: webpack.Configuration = {
  mode: Settings.mode,
  stats: Settings.stats,

  entry: {
    index: path.resolve(__dirname, Settings.entry_file),
  },

  target: "node",
  externals: [nodeExternals(), "react"],

  output: {
    filename: Settings.bundlename,
    path: path.resolve(__dirname, "lib"),
    libraryTarget: "commonjs",
    library: {
      name: "exoui",
      type: "umd",
    },
  },

  resolve: {
    extensions: Settings.extensions,
    alias: alias,
  },

  plugins: [
    new CleanWebpackPlugin(),

    // new HtmlWebpackPlugin({
    //   inject: true,
    //   template: path.resolve(__dirname, Settings.html_template),
    // }),
  ],

  optimization: {
    minimize: true,
    moduleIds: "deterministic",
    runtimeChunk: "single", // share same code bewteen js files
    splitChunks: {
      name: "runtime",
      chunks: "all",
    },
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {
            iesafe: true,
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components|dist)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: [
              ["@babel/plugin-transform-runtime", { regenerator: true }],
            ],
          },
        },
      },
    ],
  },
};

export default config;
