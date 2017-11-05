import React from 'react'
import { Row, Col } from 'antd'
import {Tabs,Carousel} from 'antd'
const TabPane = Tabs.TabPane
export default class PCNewsContainer extends React.Component{
 render(){
   const settings = {
     dots:true,
     infinite:true,
     speed:500,
     slideToShow:1,
     sutoplay:true
   }

  return(
    <div>
      <Row>
          <Col span={2}></Col>
          <Col span={20} className="containe">
          <div className="leftContainer">
            <div className="carousel">
              <Carousel {...settings}>
              <div><img src=""/></div>
              <div><img src=""/></div>
              <div><img src=""/></div>
              <div><img src=""/></div>
              </Carousel>
            </div>
          </div>
          </Col>
          <Col span={2}></Col>
        </Row>
    </div>
  )
 }

}