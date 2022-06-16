const webpack = require('webpack');
const { parsed: myEnv } = require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
    return config
  },
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: ['placeimg.com', 'images.unsplash.com']
  }
}
