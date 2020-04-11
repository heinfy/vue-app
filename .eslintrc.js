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
    "template-curly-spacing" : "off",
    "indent": "off",
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // "prettier/prettier": [ // prettier 的风格配置备份
    //   "error",
    //   {
    //     "curly": "error",
    //     "printWidth": 120, // 每行代码长度（默认80）
    //     "tabWidth": 2, // 每个tab相当于多少个空格（默认2）
    //     "useTabs": false, // 是否使用tab进行缩进（默认false）
    //     "singleQuote": true, // 使用单引号（默认false）
    //     "semi": false, // 声明结尾使用分号(默认true)
    //     "trailingComma": "none", // 最后一个对象元素加逗号（默认none）
    //     "bracketSpacing": true, // 对象，数组加空格（默认true）
    //     "arrowParens": "avoid", // (x) => {} 是否带圆括号（默认avoid）
    //     'array-element-newline': 0,
    //   }
    // ],
    // 引号类型 `` "" ''
    "quotes": ["error", "single"],
    // allow async-await
    'generator-star-spacing': 'off',
    // function() {}
    // 函数声明时'('前是是否加一个空格
    'space-before-function-paren': ["error", "never"],
    'keyword-spacing': ["error", { "overrides": {
      // if()    else if() 在if 和 else if 在关键字后禁止使用空格
      "if": { "after": true },
      // for(;;) for和( 之间禁止使用空格
      "for": { "after": true },
      // while()
      "while": { "after": true }
    } }]
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
