const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
  const BUILD_ID = Date.now();

  return {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn-b.saashub.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'randomuser.me',
          pathname: '/**',
        },
      ],

    webpack: (config, { isServer, webpack }) => {
      // Use different devtool configurations for development and production
      config.devtool = isServer
        ? false
        : phase === 'phase-production-build'
        ? 'source-map'
        : 'eval-source-map';

      if (!isServer) {
        // 1. Minification/Optimization - Disable certain optimizations for debugging
        config.optimization.minimize = false; // Disable minification for debugging
        config.optimization.concatenateModules = false; // Disable module concatenation
        config.optimization.splitChunks = false; // Disable code splitting

        // 2. Ensure the widget entry point is included
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

        // 3. Output Configuration - Expose the widget as a global library
        config.output.library = {
          name: 'MyWidget',
          type: 'window', // or 'umd' for broader compatibility
        };

        // Ensure the split chunks configuration is set up (only if you re-enable splitChunks)
        if (config.optimization.splitChunks !== false) {
          config.optimization.splitChunks.cacheGroups = {
            ...config.optimization.splitChunks.cacheGroups,
            widgetBundle: {
              name: 'widget-bundle',
              test: /widget-entry\.tsx$/,
              chunks: 'all',
              enforce: true,
            },
          };
        }

        // 4. Filename/Path - Ensure correct file naming for cache busting
        config.output.filename = (pathData) => {
          return pathData.chunk.name === 'widget-bundle'
            ? `static/chunks/[name].js?v=${BUILD_ID}`
            : `static/chunks/[name].[contenthash].js`;
        };

        config.output.chunkFilename = (pathData) => {
          return pathData.chunk.name === 'widget-bundle'
            ? `static/chunks/[name].js?v=${BUILD_ID}`
            : `static/chunks/[name].[contenthash].js`;
        };
      }

      return config;
    },
  },
};

module.exports = nextConfig;

}
