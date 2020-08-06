/* eslint-disable */

const plugins = []
const presets = []

/**
 * Presets
 */
presets.push([
  '@babel/preset-env',
  {
    targets: {
      node: 'current',
    },
  },
])
presets.push([
  'babel-preset-expo',
  {
    lazyImports: true,
  },
])
presets.push('@babel/preset-typescript')

/**
 * Plugins
 */

if (process.env.NODE_ENV === 'test') {
  // do something if test
}

module.exports = {
  presets,
  plugins,
}
