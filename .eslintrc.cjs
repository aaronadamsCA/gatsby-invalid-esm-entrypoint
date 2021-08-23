module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:import/recommended",
  ],
  parserOptions: {
    sourceType: "module",
    requireConfigFile: false,
  },
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
