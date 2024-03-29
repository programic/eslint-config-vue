module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: ['vue'],

  extends: [
    '@programic/eslint-config-base',
    'plugin:vue/recommended',
  ],

  overrides: [{
    files: ['*.vue'],
    rules: { indent: 'off' },
  }],

  rules: {
    'unicorn/prevent-abbreviations': ['error', {
      checkShorthandProperties: true,
      checkProperties: true,
      ignore: [
        /^src$/i,
        // Vue specific ignores
        /attrs|params|prop|props|ref|refs/i,
      ],
    }],
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
      switchCase: 1,
    }],
    'vue/no-v-html': 'off',
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'never',
        component: 'always',
      },
      svg: 'never',
      math: 'never',
    }],
    'vue/attributes-order': ['error'],
    'vue/order-in-components': ['error'],
    'vue/this-in-template': ['error'],
    'vue/attribute-hyphenation': ['error'],
    'vue/html-closing-bracket-newline': ['error'],
    'vue/html-closing-bracket-spacing': ['error'],
    'vue/html-end-tags': ['error'],
    'vue/html-indent': ['error'],
    'vue/html-quotes': ['error'],
    'vue/max-attributes-per-line': ['error'],
    'vue/multiline-html-element-content-newline': ['error'],
    'vue/mustache-interpolation-spacing': ['error'],
    'vue/component-definition-name-casing': ['error'],
    'vue/no-multi-spaces': ['error'],
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'vue/no-template-shadow': ['error'],
    'vue/prop-name-casing': ['error'],
    'vue/require-default-prop': ['error'],
    'vue/require-prop-types': ['error'],
    'vue/singleline-html-element-content-newline': ['error'],
    'vue/v-bind-style': ['error'],
    'vue/v-on-style': ['error'],
  },
};
