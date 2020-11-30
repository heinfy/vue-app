module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'prefer-const': ['error', {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
    }],
    'template-curly-spacing': 'off',
    indent: 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 引号类型 `` "" ''
    quotes: ['error', 'single'],
    // allow async-await
    'generator-star-spacing': 'off',
    // 函数声明时'('前是是否加一个空格 function() {}
    'space-before-function-paren': ['error', 'never'],
    'keyword-spacing': ['error', {
      // "before": true （默认）在关键字之前至少需要一个空格
      // "before": false 在关键字之前禁止使用空格
      // "after": true （默认）在关键字后至少需要一个空格
      // "after": false 在关键字后禁止使用空格
      // "overrides" 允许覆盖指定关键字的间距样式
      overrides: {
        // if() else if() 在if 和 else if 在关键字后禁止使用空格
        if: { after: false },
        // for(;;) for和( 之间禁止使用空格
        for: { after: false },
        // while()
        while: { after: false }
      }
    }]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
