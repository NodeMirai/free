import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const container = document.getElementById('app')

class App extends Component {

  importAsync() {
    import('../../until').then(show => {
      show.default('hahaha, lazy load success')
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.importAsync.bind(this)}>apap</button>
      </div>
    )
  }
}

ReactDOM.render( <App />, container)