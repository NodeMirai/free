/**
 * 获取组件与业务模型
 * 1. 获取组件defaultProps对象与组件名关键字
 * 2. 获取组件对应的业务模型
 * 3. 组合组件与业务模型为字符串
 * 4. 通过模版引擎替换模版页
 */

const fs = require('fs')
const parser = require('@babel/parser')
const ejs = require('ejs')

const demo = require('./component/demo/demo')

// 读取组件文件，生成ast
const componentCodeStr = fs.readFileSync('./component/demo/index.jsx')
const ast = parser.parse(componentCodeStr.toString(), {
  sourceType: 'module',
  plugins: ['jsx']
})

const astBody = ast.program.body
// 获取ast中类名ClassDeclaration元素下的name
let componentName = ''
for (let i = 0; i < astBody.length; i++) {
  if (astBody[i].type === 'ClassDeclaration') {
    componentName = astBody[i].id.name
  }
}
console.log('componentName------------', componentName)

/**
 * 获取组件defaultProps属性key值
 * 1. 寻找body下type为ExpressionStatement的部分expression
 * 2. 判断获取expression下left中的属性property部分中标示符name是否为defaultProps
 */
let keyList = []
for (let j = 0; j < astBody.length; j++) {
  if (astBody[j].type === 'ExpressionStatement') {
    // 判断left property是否为defaultProps
    const expression = astBody[j].expression
    const left = expression.left
    const right = expression.right
    if (left.property.name === 'defaultProps') {
      // 获取右侧所有key值
      for (let n = 0; n < right.properties.length; n++) {
        const property = right.properties[n]
        keyList.push(property.key.name)
      }
    }
  }
}
console.log('keyList------------', keyList)

/**
 * 拼装组件名与属性
 */
let componentStr = ''
let propertyStr = ''
for (let m = 0; m < keyList.length; m++) {
  propertyStr += `${keyList[m]}='${demo[keyList[m]]}' `
}
componentStr = `<${componentName} ${propertyStr} />`
console.log('componentStr-----------', componentStr)

/**
 * 使用模板引擎填充页面模型
 */
const pageModelStr = fs.readFileSync('./model/page.ejs').toString()
const ret = ejs.compile(pageModelStr)({
  PageName: 'Page',
  Component: componentStr,
  importComponentList: [componentName],
})
fs.writeFileSync('./page.jsx', ret)