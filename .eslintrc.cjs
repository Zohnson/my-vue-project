/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  env: {
    // 浏览器环境
    browser: true,
    // Node环境
    node: true,
    // 启用除了modules以外的所有 ECMAScript 6 特性
    es2021: true
  },
  root: true,
  extends: [
    // 识别自动引入
    "./.eslintrc-auto-import.json",
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier"
  ],
  globals: {
    defineEmits: "readonly",
    defineProps: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  },
  parserOptions: {
    ecmaVersion: "latest"
  }
}
