const { defineConfig, globalIgnores } = require("eslint/config");
const globals = require("globals");
const js = require("@eslint/js");

module.exports = defineConfig([
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {},
    },
    rules: {
      "no-unused-vars": ["error", { "varsIgnorePattern": "alive" }]
    },
  },

  globalIgnores(["**/dist"]),
]);