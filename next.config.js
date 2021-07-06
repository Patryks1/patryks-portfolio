const withPreact = require('next-plugin-preact');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer(
  withPreact({
    future: {
      webpack5: process.env.WEBPACK5 === 'true' // Reduces the overall bundle by another 10kb, But breaks 'run dev'
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
      return config;
    }
  })
);
