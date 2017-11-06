import React from 'react'
import { Row, Col } from 'antd'
import { Tabs, Carousel } from 'antd'
import PCNewsBlock from './pc_news_block'
import PCNewsImageBlock from './pc_news_image_block'
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
            <div className="leftContainer" style={{ width: 400, float: 'left' }}>
              <div className="carousel" style={{ width: 400, float: 'left' }}>
                <Carousel {...settings}>
                  <div><img src={require("../../images/1.png")} style={{ width: 400, height: 300 }} /></div>
                  <div><img src={require("../../images/2.png")} style={{ width: 400, height: 300 }} /></div>
                  <div><img src={require("../../images/3.png")} style={{ width: 400, height: 300 }} /></div>
                  <div><img src={require("../../images/4.png")} style={{ width: 400, height: 300 }} /></div>
                </Carousel>
              </div>
              <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112"px/>
              <PCNewsImageBlock count={6} type="yule" width="400px" cartTitle="娱乐头条" imageWidth="112"px/>
            </div>
            <Tabs className="tab_news">
              <TabPane tab="头条" key="1">
                <PCNewsBlock count={22} type="top" width="100%" bordered="false" />
              </TabPane>
              <TabPane tab="国际" key="2">
                <PCNewsBlock count={10} type="guoji" width="100%" bordered="false" />
              </TabPane>
            </Tabs>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }

}