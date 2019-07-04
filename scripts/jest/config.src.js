module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/*.ts'],
  moduleFileExtensions: ['ts', 'js'],
  preset: 'ts-jest',
  rootDir: process.cwd(),
  roots: ['<rootDir>/test'],
  testMatch: ['<rootDir>/test/*.test.ts'],
  transform: { '^.+\\.ts$': 'ts-jest' }
}
