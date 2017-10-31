import React from 'react'

export default class ComponentHeader extends React.Component {

  constructor() {
    super()
    this.state = {
      miniHeader: false //默认加载时不是mini的头部
    }
  }
  switchHeader() {
    this.setState({
      miniHeader: !this.state.miniHeader
    })
  }


  render() {
    const styleComponentHeader = {
      header: {
        backgroundColor: "#333333",
        color: "#FFFFFF",
        paddingTop: (this.state.miniHeader) ? "3px" : "15px",
        paddingBottom: (this.state.miniHeader) ? "3px" : "15px"
      }
      //还可以定义其他样式
    }

    return (
      <header style={styleComponentHeader.header} className="smallFontSize">
        <h1>这里是头部</h1>
      </header>
    )
  }
}