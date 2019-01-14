import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { bindActionCreators, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga' 
import { connect, Provider } from 'react-redux' 

import reducer from '../redux/reducer'
import rootSaga from '../redux/saga'
import action from '../redux/actionCreator'

import Demo from './component/demo'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const container = document.getElementById('app')

class App extends Component {

  render() {
    const { number } = this.props

    return (
        <div>
            <button onClick={() => {
              store.dispatch(action('INCREMENT_ASYNC', 2))
            }}>{number}</button>
            <button><Link to="/hehe"><Demo /></Link></button>  
        </div> 
    )
  }
}

const Rapp = connect(
  state => ({ ...state }),
  dispatch => ({
    actions: bindActionCreators(action, dispatch)
  })
)(App)

const Index = () => <h2>Home</h2>;

ReactDOM.render( 
  <Router>
    <Provider store={store}>
      <Route path="/" exact component={Rapp} />
      <Route path="/hehe" exact component={Index} />
    </Provider>
  </Router>
  , container)