module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  modulePaths: ["./"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/cypress/",
  ],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json",
      babelConfig: true,
      diagnostics: false,
    },
  },
}
