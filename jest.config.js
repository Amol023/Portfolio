module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: "./enzyme.config.js",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/src/components/**.{js,jsx}",
    "!**/src/components/index.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ]
};
