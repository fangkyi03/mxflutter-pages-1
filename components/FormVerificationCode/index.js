import React, { Component } from 'react'
import apiTool from '../../command/apiTool'

export default class FormVerificationCode extends Component {
  
  renderInput = () => {
    return <input style={{display:'flex',width:apiTool.getSize(200)}}/>
  }

  renderCode = () => {
    return (
        <div style={{width:apiTool.getSize(168),height:apiTool.getSize(60),background:'red'}}>

        </div>
    )
  }

  render() {
    return (
      <div style={{display:'flex',flex:1,alignItems:'center',flexDirection:'row-reverse'}}>
        {this.renderCode()}
        {this.renderInput()}
      </div>
    )
  }
}
