import ComponentHeader from './components/header'
var React = require('react')
var ReactDOM = require('react-dom')

export default class Index extends React.Component{
  render(){
    return(
      <ComponentHeader/>
    )
  }
}

// ReactDOM.render(<Index/>,document.getElementById(''))