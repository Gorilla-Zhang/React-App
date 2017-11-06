import React from 'react'
import { Row, Col } from 'antd'

export default class PCFooter extends React.Component{
render(){
  return(
    <footer style={{color:'red'}}>
       <Row>
         <Col span={2}></Col>
         <Col span={4}>
         &copy;&nbsp;2016 ReactNews. All Rights Reserved.
         </Col>
         <Col span={2}></Col>
         </Row>     
    </footer>
  )
}

}