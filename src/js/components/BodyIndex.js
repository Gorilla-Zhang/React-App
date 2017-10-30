import React from 'react'
import BodyChild from './components/bodychild'

export default class BodyIndex extends React.Component {
  constructor() {
    super();//调用基类的所有的初始化方法
    this.state = { username: "Parry",
    age:20 }//初始化赋值
  }
  changeUserInfo(){
    this.setState({age:50})
  }
  render() {
    // setTimeout(() => {
    //   //更改state的时候
    //   this.setState({ username: "IMOOC", age:3});
    // }, 4000)

    return (
      <div>
        <h2>页面的主题内容</h2>
        <p>{this.props.userid} {this.props.username}</p>
        <p>age: {this.state.age}</p>
        <input type="button" value="提交" onClick={this.changeUserInfo.bind(this)}/>
        <BodyChild />
      </div>
    )
  }
}