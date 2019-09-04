module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:jsx-a11y/strict",
    "plugin:cypress/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      // use <root>/tsconfig.json
      typescript: {},

      // use <root>/path/to/folder/tsconfig.json
      typescript: {
        directory: ".",
      },
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    "cypress/globals": true,
  },
  plugins: ["@typescript-eslint", "react", "import", "jsx-a11y", "cypress"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  rules: {
    "react/prop-types": "off", // Disable prop-types as we use TypeScript for type checking
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/no-default-export": "error",
    "@typescript-eslint/explicit-member-accessibility": "off",
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["./utils/react-axe-wrapper.tsx"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["./pages/**/*.tsx"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
}
