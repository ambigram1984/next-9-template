module.exports = {
  preset: "ts-jest",
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
    },
  },
}
