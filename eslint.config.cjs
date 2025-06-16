const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    files: ["**/*.{js,cjs}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script", // <- CommonJS!
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      js,
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars':'off',
    },
  },
];
