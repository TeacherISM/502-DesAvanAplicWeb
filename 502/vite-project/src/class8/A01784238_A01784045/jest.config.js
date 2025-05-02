/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+.tsx?$": [
      "ts-jest",
      {
        tsconfig: "./ts.config.jest.json",
      },
    ],
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
};
