import React, { Component } from 'react'
import { Col } from 'antd';

export default class FormGridContainerCol extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShow:true
    }
  }
 
  setShow = (isShow) =>{
    this.setState({isShow})
  }

  render() {
    const {span} = this.props
    const {isShow} = this.state
    if (!isShow) return null
    return (
      <Col span={span}>
        {this.props.children}
      </Col>
    )
  }
}
