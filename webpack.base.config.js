const path = require('path')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

module.exports = {
  entry: [
    '@babel/polyfill',
    path.resolve(__dirname, 'src/index.tsx'),
  ],
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src'),
    ],
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.css', '.scss'],
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
  ],
}
