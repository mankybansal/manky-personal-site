// next.config.js
module.exports = {
  output: "export",
  images: {
    domains: ["cdn-images-1.medium.com", "another-domain.com"], // Add other domains as needed
    unoptimized: true, // Opt out of Automatic Image Optimization
  },
};
