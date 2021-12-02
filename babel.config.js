const {resolve} = require("./babel.config");
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss', '.less'],
    alias: {
      '@': resolve('src'),
      'styles': resolve('src/assets/styles'),
      'images': resolve('src/assets/images'),
      'css': resolve('src/assets/css'),
      'components': resolve('src/components'),
      'views': resolve('src/views')
    }
  }
}
