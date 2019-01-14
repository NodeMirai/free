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

export default Demo