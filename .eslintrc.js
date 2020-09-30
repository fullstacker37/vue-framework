module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "warn", // off-0 warn-1 error-2
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "warn",
    semi: "off", // ["error", "always"]
    "space-before-function-paren": "off",
    quotes: "off",
    "eol-last": "off"
  }
};
