module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2020: true,
        node: true
    },
    extends: [
        "plugin:react/recommended",
        "standard"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12
    },
    plugins: [
        "react"
    ],
    rules: {
        indent: [2, 4, { SwitchCase: 1 }],
        quotes: [2, "double"],
        semi: ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        "react/jsx-indent": [2, 4, { checkAttributes: true }],
        "react/jsx-indent-props": [2, 4]
    }
};
