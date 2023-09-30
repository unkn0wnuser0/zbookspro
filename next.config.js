/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  output: 'standalone',
}

module.exports = nextConfig
