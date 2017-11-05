import React from 'react'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
import PCNewsContainer from './pc_newscontainer'


export default class Index extends React.Component{
  render(){
    return(
      <div>
    <PCHeader/>
    <PCFooter/>
    </div>
    )
  }
}

// ReactDOM.render(<Index/>,document.getElementById(''))