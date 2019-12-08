'use strict';
const OFF = 0;
const ERROR = 2;

module.exports = {
    extends: 'eslint-config-airbnb',
    ecmaFeatures: {
        jsx: true,
        modules: true,
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parser: 'babel-eslint',
    rules: {
        'no-tabs': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'accessor-pairs': OFF,
        'brace-style': [ERROR, '1tbs'],
        'comma-dangle': [ERROR, 'always-multiline'], // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
        // always-multiline：多行模式必须带逗号，单行模式不能带逗号
        'consistent-return': OFF,
        'dot-location': [ERROR, 'property'],
        'dot-notation': ERROR,
        'eol-last': ERROR,
        eqeqeq: [ERROR, 'allow-null'],
        semi: [ERROR, 'always'],
        indent: OFF,
        'jsx-quotes': [ERROR, 'prefer-double'],
        'keyword-spacing': [ERROR, { after: true, before: true }],
        'no-bitwise': OFF,
        'no-inner-declarations': [ERROR, 'functions'],
        'no-multi-spaces': ERROR,
        'no-restricted-syntax': [ERROR, 'WithStatement'],
        'no-shadow': ERROR,
        'no-unused-expressions': ERROR,
        'no-unused-vars': [ERROR, { args: 'none' }],
        'no-use-before-define': [ERROR, { functions: false, variables: false }],
        'no-useless-concat': OFF,
        quotes: [
            ERROR,
            'single',
            { avoidEscape: true, allowTemplateLiterals: true },
        ],
        'space-before-blocks': ERROR,
        'space-before-function-paren': OFF,
        'valid-typeof': [ERROR, { requireStringLiterals: true }],
        'no-var': ERROR,
        'react/button-has-type': OFF, // 按钮带type属性
        'prefer-const': OFF, // 对变量进行检测是否可以使用const
        strict: OFF,
        'valid-jsdoc': ERROR,
        'react/jsx-uses-react': ERROR,
        'react/jsx-uses-vars': ERROR,
        'react/react-in-jsx-scope': ERROR,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    },
    plugins: ['react'],
};
