import React, { Component } from 'react'
import './style.scss'

class Demo extends Component {

  render() {
    return (
      <div className='demo'>
        {this.props.content}
      </div>
    )
  }
}

// 定义属性接口
Demo.defaultProps = {
  content: '默认属性'
}

export default Demo