/*
 * @Author: oushiyibeizideshi
 * @LastEditors: oushiyibeizideshi
 * @Date: 2022-09-25 20:50:19
 * @LastEditTime: 2022-09-26 00:05:15
 * @Description:
 *
 */
module.exports = {
  root: true,
  // customSyntax: "postcss-less",
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    "stylelint-config-recommended-vue"
  ],
  overrides: [
    {
      files: ["*.less"],
      rules: {
        "at-rule-no-unknown": null,
        "no-descending-specificity": null
      }
    },
    {
      files: ["*.vue"],
      extends: [
        "stylelint-config-standard",
        "stylelint-config-prettier",
        "stylelint-config-recommended-vue"
      ],
      rules: {
        "at-rule-no-unknown": null,
        "no-descending-specificity": null,
        "no-duplicate-selectors": null
      }
    }
  ],
  ignoreFiles: [
    "node_modules/**/*",
    "dist/**/*",
    "lib/**/*",
    "**/*.js",
    "**/*.jsx",
    "**/*.ts",
    "**/*.tsx",
    "**/*.json"
  ]
}
