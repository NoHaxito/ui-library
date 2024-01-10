const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/getting-started/installation",
        permanent: true,
      },
      {
        source: "/docs/installation",
        destination: "/docs/installation/nextjs",
        permanent: true,
      },
      {
        source: "/docs/components",
        destination: "/docs/components/accordion",
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
