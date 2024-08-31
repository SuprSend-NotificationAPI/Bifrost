const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    reactStrictMode: true,
    images: {
      domains: ['cdn-b.saashub.com', 'randomuser.me'],
    },

    webpack: (config, { dev, isServer }) => {
      // Explicitly set the mode
      config.mode = isDevelopment ? 'development' : 'production';

      if (isServer) {
        config.resolve.fallback = {
          fs: false,
          net: false,
          tls: false,
        };
      } else {
        const originalEntry = config.entry;

        config.entry = async () => {
          const entries = await originalEntry();

          console.log('Webpack entries:', entries);

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

        // Set devtool based on the environment
        config.devtool = isDevelopment ? 'eval-source-map' : 'source-map'; // Changed to 'source-map' for production

        // Configure caching based on the environment
        config.cache = isDevelopment
          ? {
              type: 'memory',
              cacheUnaffected: true,
            }
          : {
              type: 'filesystem',
              cacheDirectory: path.resolve(__dirname, '.temp_cache'),
              compression: 'gzip',
              profile: true,
              version: '1.0', // Adjust as necessary
            };

        // Apply cache-busting in both development and production
        config.output.filename = (pathData) => {
          return pathData.chunk.name === 'widget-bundle'
            ? `static/chunks/[name].js?ver=${Date.now()}`
            : 'static/chunks/[name].[contenthash].js';
        };

        config.output.chunkFilename = (pathData) => {
          return pathData.chunk.name === 'widget-bundle'
            ? `static/chunks/[name].js?ver=${Date.now()}`
            : 'static/chunks/[name].[contenthash].js';
        };

        console.log('Webpack configuration:', config);
      }
      return config;
    },
  };
};

module.exports = nextConfig;
