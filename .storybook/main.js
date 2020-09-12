const path = require("path")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

module.exports = {
  stories: ["../**/*.stories.mdx", "../**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => {
    /**
     * TODO: Figure out if this config is still needed
     * https://github.com/storybookjs/storybook/issues/11255
     */
    config.resolve.alias["core-js/modules"] = path.resolve(
      __dirname,
      "..",
      "node_modules/@storybook/core/node_modules/core-js/modules"
    )
    /**
     * TODO: See if storybook supports typescript baseUrl property
     * https://github.com/storybookjs/storybook/issues/4136
     */
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        // configFile: "../tsconfig.json",
      })
    )
    /**
     * Handle loading SVGR components
     */
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test.test(".svg")
    )
    fileLoaderRule.exclude = /\.svg$/
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })
    return config
  },
}
