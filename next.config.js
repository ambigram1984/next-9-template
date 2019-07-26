const withPlugins = require("next-compose-plugins")
const withFonts = require("next-fonts")

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })
    return config
  },
}

module.exports = withPlugins([withBundleAnalyzer, withFonts], nextConfig)
