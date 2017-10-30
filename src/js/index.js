import ComponentHeader from './components/header'
import ComponentFooter from './components/footer'
import BodyIndex from './components/BodyIndex'
var React = require('react')
var ReactDOM = require('react-dom')

export default class Index extends React.Component {

  componentWillMount(){
    //定义你的逻辑即可
    console.log("Index - componentWillMount");
  }
  componentDidMount(){
    console.log("Index - componentDidMount");
  }

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
        <BodyIndex userid={123456} username={"buck"}/>
        <ComponentFooter/>
      </div>
    )
  }
}

// ReactDOM.render(<Index/>,document.getElementById(''))