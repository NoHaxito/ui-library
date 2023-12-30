/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@sihaxito/eslint-config/react.js"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};
