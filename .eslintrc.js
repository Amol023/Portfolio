module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb", // See <https://github.com/airbnb/javascript>
    "prettier"
  ],
  env: {
    browser: true,
    es6: true,
    mocha: true,
    node: true
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": 0,
    "react/require-default-props": 1,
    "react/prop-types": 1
  }
};
