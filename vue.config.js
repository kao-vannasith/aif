const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // This will forward any request that does not match a static file to localhost:3000
    proxy: 'http://localhost:8080'
}
})
