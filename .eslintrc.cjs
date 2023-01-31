module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "standard-with-typescript",
    "plugin:prettier/recommended",
    "./config/.eslintrc-auto-import.json"
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // Your TypeScript files extension

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
      ],

      parserOptions: {
        project: ["./tsconfig.json"] // Specify it only for TypeScript files
      }
    }
  ],

  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
    extraFileExtensions: [".vue"]
  },
  plugins: ["vue", "@typescript-eslint", "import", "promise", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-unsafe-return": "off"
  }
}
