const fetch = require('node-fetch');
const FormData = require('form-data');

module.exports = {
  globals: {
    fetch,
    FormData
  },

  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: "src/_coverage",

  collectCoverageFrom: ["**/src/**/*.{js,jsx}"],

  setupFilesAfterEnv: ["<rootDir>src/setupTests.js"],

  testEnvironment: "jsdom",

  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  },
};
