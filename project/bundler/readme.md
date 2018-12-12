# 打包构建

## 基础配置
### loader：webpack本身只能处理js文件，因此非js文件就需要loader将其转为webpack可处理的js文件
1. babel：具体转译到何种程度需要看babel具体需要的配置，.babelrc
2. css：
- style-loader：Adds CSS to the DOM by injecting a `<style>` tag
- css-loader：The css-loader interprets @import and url() like import/require() and will resolve them.


### 单页应用配置
1. 懒加载：本质为代码中通过import动态加载内容，需要支持promise实现(import引入的是一个模块的promise对象)
- chunkFilename: webpack配置的output中配置好该字段，若不配置默认名为[id]