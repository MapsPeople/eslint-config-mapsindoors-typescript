module.exports = {
    extends: [
        "@mapsindoors/eslint-config"
    ],
    plugins: [
        "@typescript-eslint",
        "react"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        "no-unused-vars": 0,
        "no-undef": 0,
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/explicit-member-accessibility": "off", // Public or private
        "@typescript-eslint/explicit-function-return-type": "warn", // : Void as return type on functions without
        "@typescript-eslint/type-annotation-spacing": "warn", // Consistent spacing around type annotations
        "@typescript-eslint/no-unused-vars": 2,
        "react/jsx-curly-spacing": ["error", "never"], // Disallow spaces inside of curly braces in JSX attributes
        "react/jsx-equals-spacing": ["error", "never"] // Disallow spaces around equal signs in JSX attributes
    }
};
