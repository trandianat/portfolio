module.exports = {
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!**/node_modules/**',
        '!**/declarations.d.ts',
        '!**/assets/**',
        '!**/styles.ts',
    ],
    coverageReporters: ['html', 'text', 'text-summary'],
    moduleDirectories: ['node_modules', 'src'],
    snapshotResolver: '<rootDir>/snapshotResolver.ts',
    snapshotSerializers: ['@emotion/jest/serializer'], // Outputs CSS in snapshots
    testEnvironment: 'jsdom' // Required by @emotion/jest
};