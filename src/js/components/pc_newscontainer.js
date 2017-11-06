import React from 'react'
import { Row, Col } from 'antd'
import { Tabs, Carousel } from 'antd'
const TabPane = Tabs.TabPane
export default class PCNewsContainer extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slideToShow: 1,
      autoplay: true
    }

    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="container" style={{ paddingTop: 10 }}>
            <div className="leftContainer" style={{ width: 400, height: 300, float: 'left' }}>
              <div className="carousel" style={{ width: 400, height: 300, float: 'left' }}>
                <Carousel {...settings}>
                  <div><img src={require("../../images/1.png")} /></div>
                  <div><img src={require("../../images/2.png")} /></div>
                  <div><img src={require("../../images/3.png")} /></div>
                  <div><img src={require("../../images/4.png")} /></div>
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