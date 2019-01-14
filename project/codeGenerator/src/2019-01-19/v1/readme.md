## 基础生成器demo
### 生成单个页面
#### 页面模型
``````````
import React, { Component } from 'react'
<% if (importComponentList.length) { %>
  <% importComponentList.forEach(function(name) { %>
import <%= name %> from '<%= name %>'
  <% }) %>
<% } %>

class <%= PageName %> extends Component {

  render() {
    return (
      <div className='demo'>
        <%- Component %>
      </div>
    )
  }
}

export default <%= PageName %>
``````````
#### 组件名获取
#### 组件属性拼接
#### 渲染页面模版