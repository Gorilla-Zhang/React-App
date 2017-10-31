import React from 'react'
import './footer.less'
export default class ComponentFooter extends React.Component{
  render(){
    return (
      <footer className='minifooter'>
        <h1>这里是页脚，一般放置版权信息</h1>  
      </footer>  
    )
  }
}