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
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
