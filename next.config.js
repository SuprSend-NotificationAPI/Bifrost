const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
  const BUILD_ID = Date.now();

  return {
    reactStrictMode: true,
    images: {
      domains: ['cdn-b.saashub.com', 'randomuser.me'],
    },

    webpack: (config, { isServer }) => {
      // No source maps generated, optimizing for production
      config.devtool = false;

      if (!isServer) {
        const originalEntry = config.entry;
        config.entry = async () => {
          const entries = await originalEntry();
          
          if (!entries['widget-bundle']) {
            entries['widget-bundle'] = {
              import: path.resolve(__dirname, 'widget-entry.tsx'),
              dependOn: undefined,
            };
          }
          
          return entries;
        };

        // Ensure the split chunks configuration is set up
        if (!config.optimization.splitChunks) {
          config.optimization.splitChunks = {};
        }
        
        config.optimization.splitChunks.cacheGroups = {
          ...config.optimization.splitChunks.cacheGroups,
          widgetBundle: {
            name: 'widget-bundle',
            test: /widget-entry\.tsx$/,
            chunks: 'all',
            enforce: true,
          },
        };

        // Apply cache-busting filename pattern across all environments
        config.output.filename = (pathData) => {
          return pathData.chunk.name === 'widget-bundle'
            ? `static/chunks/[name].js?v=${BUILD_ID}`
            : 'static/chunks/[name].[contenthash].js';
        };

        config.output.chunkFilename = (pathData) => {
          return pathData.chunk.name === 'widget-bundle'
            ? `static/chunks/[name].js?v=${BUILD_ID}`
            : 'static/chunks/[name].[contenthash].js';
        };
      }

      return config;
    },
  };
};

module.exports = nextConfig;
