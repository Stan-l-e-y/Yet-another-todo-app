/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://localhost:3000/api/:path*', // Proxy to Backend
  //     },
  //   ];
  // },
  webpack: (config) => {
    if (!config.experiments) {
      config.experiments = {};
    }
    config.experiments.topLevelAwait = true;
    return config;
  },
  swcMinify: true,
};

module.exports = nextConfig;
