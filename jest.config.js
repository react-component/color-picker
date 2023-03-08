module.exports = {
  setupFilesAfterEnv: ['./tests/setupFilesAfterEnv.ts'],
  collectCoverageFrom: ['./src/**/*.{ts,tsx}'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
};
