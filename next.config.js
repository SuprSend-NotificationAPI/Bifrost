const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Server-side configurations, if necessary
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        // Ensure other server-side dependencies are handled
      };
    } else {
      // Client-side configurations
      const originalEntry = config.entry;

      config.entry = async () => {
        const entries = await originalEntry();

        console.log('Webpack entries:', entries); // Log the entries

        entries['widget-bundle'] = {
          import: path.resolve(__dirname, 'widget-entry.tsx'),
          dependOn: undefined,
        };

        return entries;
      };

      if (!config.optimization.splitChunks) {
        config.optimization.splitChunks = {};
      }
      if (!config.optimization.splitChunks.cacheGroups) {
        config.optimization.splitChunks.cacheGroups = {};
      }

      config.optimization.splitChunks.cacheGroups.widgetBundle = {
        name: 'widget-bundle',
        test: /widget-entry\.tsx$/,
        chunks: 'all',
        enforce: true,
      };

      console.log('Webpack configuration:', config); // Log the configuration
    }
    return config;
  }
};

module.exports = nextConfig;
