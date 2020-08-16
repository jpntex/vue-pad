module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-pad/' : '/',
  pages: {
    index: {
      entry: './dev/serve.js',
      template: './dev/index.html',
      title: 'Vue Pad - Sound Pads for Vue JS',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  }
}
