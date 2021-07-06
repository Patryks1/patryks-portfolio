module.exports = {
  projects: [
    {
      displayName: 'server',
      testEnvironment: 'node',
      testRegex: './test/[^.]+\\.test.s\\.tsx$'
    },
    {
      displayName: 'browser',
      browser: true,
      testRegex: './test/[^.]+\\.test.b\\.tsx$'
    },
    {
      displayName: 'jsdom',
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ['<rootDir>/setupTests.tsx'],
      testRegex: './test/[^.]+\\.test.d\\.tsx$'
    }
  ],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.tsx'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '\\.(css|less|sass|scss)$': '<rootDir>/test/mock/styleMock.tsx'
  }
};
