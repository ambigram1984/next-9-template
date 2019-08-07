const withPlugins = require("next-compose-plugins")
const withFonts = require("next-fonts")
const withOptimizedImages = require("next-optimized-images")

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Handles converting svgs to react components.
    })
    return config
  },
}

module.exports = withPlugins(
  [
    withBundleAnalyzer,
    withFonts,
    [
      withOptimizedImages,
      {
        handleImages: ["jpeg", "png"], // Manually specify so SVGR does not break
        mozjpeg: {
          progressive: false,
        },
      },
    ],
  ],
  nextConfig
)
