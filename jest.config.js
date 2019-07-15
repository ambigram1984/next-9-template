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
      tsConfigFile: "tsconfig.jest.json",
      babelConfig: true,
    },
  },
}
