/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  reactStrictMode: true,
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

module.exports = nextConfig;
