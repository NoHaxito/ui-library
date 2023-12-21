const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/getting-started/installation",
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
