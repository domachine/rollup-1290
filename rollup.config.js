'use strict'

module.exports = {
  entry: 'src/module.js',
  external: id => !id.startsWith('./'),
  format: 'commonjs'
}
