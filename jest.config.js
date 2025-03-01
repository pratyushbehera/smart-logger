module.exports = {
  testEnvironment: "node", // Use 'node' for Node.js environment
  coverageDirectory: "coverage", // Folder for coverage reports
  collectCoverage: true, // Enable coverage collection
  collectCoverageFrom: [
    "src/logger.ts", // Include the main logger file
    "!**/node_modules/**", // Exclude node_modules
    "!**/tests/**", // Exclude the tests folder
  ],
};
