const { hostname } = require("os");

module.exports = {
  reactStrictMode: true,
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      }
    ],
  },
};
