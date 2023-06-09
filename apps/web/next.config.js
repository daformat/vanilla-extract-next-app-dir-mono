const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['ui'],
  experimental: {
    appDir: true,
  },
}

module.exports = withVanillaExtract(nextConfig)
