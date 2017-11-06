import React from 'react'
import { Row, Col } from 'antd'
import { Menu, Icon, Tabs, message, Form, Input, Button, Checkbox, Modal } from 'antd'
import { Router, Route, Link, browserHistory } from 'react-router'
const FormItem = Form.Item
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const TabPane = Tabs.TabPane

class CommonComments extends React.Component {
  constructor() {
    super()
    this.state = {
      comments: ''
    }
  }
  ComponentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    }
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({ comments: json })

      })
  }

  handleSubmit() { 
    e.prevenDefault()
    var myFetchOptions={
      method:'GET'
    }
    var formdate = this.props.form.getFieldValue()
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid="+localStorage.userid+"&uniquekey="+this.props.uniquekey+"&commnet="+formdata.remark,myFetchOptions)
    .then(response=>response.json())
    .then(json => {this.componentDidMount()})
  };

  render() {
    let { getFieldProps } = this.props.form
    const { commnets } = this.state
    const commnetList = commnets.length ?
      comments.map((comment, index) => (
        <Card key={index} title={comment.UserName} extra={<a href="#">发布于{commnet.datetime}</a>}>
          <p>{comment.Commnets}</p>
        </Card>
      ))
      :
      '没有加载到任何评论'
    return (
      <div class="commit">
        <Row>
          <Col span={24}>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="您的评论">
                <Input type="textarea" placeholder="随便写" {...getFieldPAROPS('remark', { initivalValue: '' }) }></Input>
              </FormItem>
              <Button type="primary" htmlTyoe="submit">提交评论</Button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}
