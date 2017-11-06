import React from 'react'
import { Row, Col } from 'antd'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
import PCNewsImageBlock from './pc_news_image_block'
import CommonComments from './common_comments.js'
export default class PCNewsDetails extends React.Componnet {
  constructor() {
    super()
    this.state = {
      newsItem: ''
    }
  }
  componentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    }
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({ newsItem: json })
        document.title = this.state.newsItem.title + "- React News | React 驱动的新闻平台"
      })
  }
  createMarkup() {
    return { _html: this.state.newsItem.pagecontent }
  }

  render() {
    return (
      <PCHeader />
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={14} className="Container">
            <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}>
            <hr/>
            <CommonComments uniquekey={this.props.params.uniquekey}/>
            </div>
          </Col>
          <Col span={6}>
          <PCNewsImageBlock count={40} type={"top"} width="100%" cardTitle="相关新闻" imageWidth="150px" />
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
      <PCFooter />
    )
  }

}