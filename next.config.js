const withTM = require("next-transpile-modules")([
  "@mui/material",
  "@mui/system",
]);

module.exports = withTM(
  svgr({
    reactStrictMode: true,
    images: {
      domains: ["cdn.shopify.com"],
    },
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@mui/styled-engine": "@mui/styled-engine-sc",
      };
      return config;
    },
  })
);

function svgr(nextConfig = {}) {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (typeof nextConfig.webpack === "function") {
        config = nextConfig.webpack(config, options);
      }

      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              dimensions: false,
              svgoConfig: { removeViewBox: false },
            },
          },
        ],
      });

      return config;
    },
  });
}
