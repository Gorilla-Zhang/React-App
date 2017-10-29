import ComponentHeader from './components/header'
import ComponentFooter from './components/footer'
import BodyIndex from './components/BodyIndex'
var React = require('react')
var ReactDOM = require('react-dom')

export default class Index extends React.Component {
  render() {
    // var component
    // if(用户已登录){
    //   component = <ComponentLoginHeader/>
    // }
    // else{
    //   component = <ComponentFooter/>
    // }

    return (
      <div>
        <ComponentHeader/>
        <BodyIndex/>
        <ComponentFooter/>
      </div>
    )
  }
}

// ReactDOM.render(<Index/>,document.getElementById(''))