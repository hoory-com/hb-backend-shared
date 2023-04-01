module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended",
    'airbnb-base',
    'airbnb-typescript/base', 'prettier'],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    project: './tsconfig.json'
  },
  plugins: ["@typescript-eslint", 'prettier'],
  rules: {
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "prettier/prettier": ["error"]
  },
};
