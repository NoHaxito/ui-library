/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint-config/library.js"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};
