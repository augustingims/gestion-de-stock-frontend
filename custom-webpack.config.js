const { EnvironmentPlugin, DefinePlugin, LoaderOptionsPlugin } = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const BrotliPlugin = require('brotli-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
  plugins: [
    new DefinePlugin({
      'env': {
        SERVER_API_URL: JSON.stringify(process.env.SERVER_API_URL)
      }
    }),
    new EnvironmentPlugin([]),
    new BrotliPlugin({
      asset: '[path].br',
      threshold: 0,
      minRatio: 0.8,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: '../stats.html',
    }),
    new LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new CompressionPlugin({
      filename: "[path][base].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new HtmlWebpackPlugin(),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    })
  ]
};
