module.exports = {
    coverageReporters: ['html', 'text', 'text-summary'],
    moduleDirectories: ['node_modules', 'src'],
    snapshotResolver: '<rootDir>/snapshotResolver.ts',
    snapshotSerializers: ['@emotion/jest/serializer'], // Outputs CSS in snapshots
    testEnvironment: 'jsdom' // Required by @emotion/jest
};