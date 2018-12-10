# 打包构建

## 基础配置
### loader：webpack本身只能处理js文件，因此非js文件就需要loader将其转为webpack可处理的js文件
1. js中es6特性：babel，具体转译到何种程度需要看babel具体需要的配置，.babelrc
- presets: ["es2015", "react", "stage-0"]
- plugins: ["transform-decorators-legacy"]
2. css：
- style-loader：Adds CSS to the DOM by injecting a `<style>` tag
- css-loader：The css-loader interprets @import and url() like import/require() and will resolve them.
