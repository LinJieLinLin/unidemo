/*
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-01-14 17:45:06
 * @Description:
 */

//  /* prettier-ignore */ 不使用prettier格式化代码 css PX 处理
// eslint
// // eslint-disable-line 关闭当前行
// // eslint-disable-next-line 关闭下一行
// /* eslint-disable */ 关闭当前文件
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/strongly-recommended', '@vue/standard'],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 'off',
    // 关 缩进
    indent: 0,
    // 关 最后一行必须留空
    'eol-last': 0,
    // 关 函数定义时括号前面要不要有空格
    'space-before-function-paren': 0,
    // 单引号
    quotes: 1,
    // 尾分号
    semi: 1,
    // 关 定义数组或对象最后多余的逗号
    'comma-dangle': 0,
    'no-unused-vars': 0,
    'template-curly-spacing': 'off',
    // 关 要求或禁止在函数标识符和其调用之间有空格
    'func-call-spacing': 0,
    // 关 强制圆括号内空格的一致性
    'space-in-parens': 0,
    // 关 && || 运算符要带()
    'no-mixed-operators': 0,
    // 关 定义数组或对象最后多余的逗号
    'comma-dangle': 0,
    'empty-rules': 0,
    'no-async-promise-executor': 0,
    'prefer-promise-reject-errors': 0,
    'prefer-const': 0,
    'vue/html-indent': 0,
    'vue/html-self-closing': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/max-attributes-per-line': 0,
    'vue/singleline-html-element-content-newline': 0,
    // 不允许修改prop值
    'vue/no-mutating-props': 0,
    'no-dupe-keys': 0,
    'quote-props': 0,
    'no-unused-vars': 0,
    'no-case-declarations': 0,
    'lines-between-class-members': 0,
    'array-callback-return': 0,
    // 关 不允许使用var
    'no-var': 0,
  },
  globals: {
    APP_VERSION: true,
    uniCloud: true,
    App: true,
    Page: true,
    uni: true,
    taro: true,
    wx: true,
    getApp: true,
    getPage: true,
    getCurrentPages: true,
    requirePlugin: true,
  },
}
