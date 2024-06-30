// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNextIntl = require('next-intl/plugin')()

/** @type {import('next').NextConfig} */
module.exports = withNextIntl({
  output: process.env.BUILD_STANDALONE === 'true' ? 'standalone' : undefined,
  compiler: {
    styledComponents: true
  },
  webpack: (config) => {
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: ['@svgr/webpack']
    // })

    return config
  }
  // async rewrites() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/home",
  //     },
  //     {
  //       source: "/en",
  //       destination: "/en/home",
  //     },
  //     {
  //       source: "/de",
  //       destination: "/de/home",
  //     },
  //   ];
  // },
})
