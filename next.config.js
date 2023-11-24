/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  reactStrictMode: false,
  images: {
    domains: ["i.pravatar.cc", "lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };

    return config;
  },
};
const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA(nextConfig);
