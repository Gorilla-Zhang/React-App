import React from 'react'
import ReactDOM from 'react-dom'
import Index from './index'
import {Router,Route,hashHistory} from 'react-router'
import ComponentList from './components/list'
import ComponentDetails from './components/details'

export default class Root extends React.Component{
  render(){
    return(
      //替换之前的index,变成程序的入口
      <Router history = {hashHistory}>
        <Route component={Index} path="/">
        <Route component={ComponentDetails} path="details"></Route>
        </Route>
        <Route component={ComponentList} path="list"></Route>
      </Router>
    )
  }
}

ReactDOM.render(<Root/>,document.getElementById('example'))