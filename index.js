module.exports = {
    extends: [
        "@mapsindoors/eslint-config"
    ],
    plugins: ["@typescript-eslint"],
    rules: {
        "@typescript-eslint/no-parameter-properties": 0,
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/explicit-function-return-type": [1, { "allowExpressions": true }],
        "no-unused-vars": 0,
        "no-undef": 0,
        "@typescript-eslint/no-unused-vars": 2
    }
};
