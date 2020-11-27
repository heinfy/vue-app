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
    // function() {}
    // 函数声明时'('前是是否加一个空格
    'space-before-function-paren': ['error', 'never'],
    'keyword-spacing': ['error', {
 overrides: {
      // if()    else if() 在if 和 else if 在关键字后禁止使用空格
      if: { after: true },
      // for(;;) for和( 之间禁止使用空格
      for: { after: true },
      // while()
      while: { after: true }
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
