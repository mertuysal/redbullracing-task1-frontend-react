// jest.config.js
module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(axios)/)", // Only transform the axios module if needed
  ],
  moduleNameMapper: {
    "\\.svg$": "identity-obj-proxy",
    "\\.(css|less)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
};
