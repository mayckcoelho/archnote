module.exports = {
    globals: {},
    transform: {
        ".(ts|tsx)": "ts-jest"
    },
    moduleFileExtensions: ["js", "ts"],
    coverageReporters: ["json", "lcov", "text", "clover"],
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.{ts,tsx}"
    ],
    testMatch: ["<rootDir>/tests/**/*.ts"],
};
