const DojoWebpackPlugin = require('dojo-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  transpileDependencies: [
    'vuetify',
  ],

  devServer: {
    proxy: {
      '/lyra': {
        target: 'http://localhost:8087',
        ws: true,
        changeOrigin: false,
      },
        '/api': {
            target: 'http://localhost:8087',
            ws: true,
            changeOrigin: false,
        },
    },

    port: 8082,
  },

  outputDir: 'target/dist',
  assetsDir: 'static',

  configureWebpack: {
    plugins: [
      new DojoWebpackPlugin({
        loaderConfig: require('./node_modules/lyra-grid/config/loaderConfig'),
        environment: { dojoRoot: '.' },	// used at run time for non-packed resources (e.g. blank.gif)
        buildEnvironment: { dojoRoot: 'node_modules' }, // used at build time
        locales: ['en', 'ru'],
        // noConsole: true
      }),
      new CopyWebpackPlugin([{
        context: 'node_modules',
        from: 'dojo/resources/blank.gif',
        to: 'dojo/resources',
      }]),
    ],

    optimization: {
      splitChunks: false,
    },

  },
};
