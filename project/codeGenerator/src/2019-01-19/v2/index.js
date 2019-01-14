/**
 * 获取组件与业务模型
 * 1. 获取组件模型name和props及其他特殊判断标识
 * 2. 获取组件对应的业务模型
 * 3. 组合组件与业务模型为字符串
 * 4. 通过模版引擎替换模版页
 */

const fs = require('fs')
const ejs = require('ejs')

const componentModel = require('./componentModel')
const componentConfig = require('./componentConfig')

/**
 * 处理组件模型，返回组件字符串
 * todo: 容错处理
 */
function componentModelHandle(model, config) {
  if (!model || typeof model !== 'object') {
    console.error('componentModel type must be object')
    return ''
  }
  const { name, props = [], hasChildren } = componentModel
  let componentCodeStr = ''
  let propStr = ''
  for (let i = 0; i < props.length; i++) {
    propStr += `${props[i]}='${config[props[i]]}' `
  }
  // 判断是否有子元素
  if (hasChildren) {
    componentCodeStr = `<${name} ${propStr}></${name}>`
  } else {
    componentCodeStr = `<${name} ${propStr}/>`
  }
  return componentCodeStr
}

let componentStr = componentModelHandle(componentModel, componentConfig)

/**
 * 使用模板引擎填充页面模型
 */
const pageModelStr = fs.readFileSync('./page.ejs').toString()
const {name, importPath} = componentModel
const ret = ejs.compile(pageModelStr)({
  PageName: 'Page',
  Component: componentStr,
  importComponentList: [{
    name,
    importPath,
  }],
})
fs.writeFileSync('./page.jsx', ret)