/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    rootDir: '.',
    testMatch: ['**/*.test.tsx'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  };
  