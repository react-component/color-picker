const path = require('path')

module.exports = {
  webpack: config => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        react: path.resolve('node_modules/react')
      }
    }
  })
}
