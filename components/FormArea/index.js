import React, { Component } from 'react'
import apiTool from '../../command/apiTool'

export default class FormArea extends Component {
  render() {
    return (
      <div style={{width:apiTool.getSize(600),height:apiTool.getSize(250),marginBottom:apiTool.getSize(20),paddingTop:apiTool.getSize(40)}}>
        <textarea />
      </div>
    )
  }
}
