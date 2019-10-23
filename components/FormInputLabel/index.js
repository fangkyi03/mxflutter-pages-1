import React, { Component } from 'react'

export default class FormInputLabel extends Component {

  renderLabel = () => {
    const {data} = this.props
    return (
        <div>
            {data.label || ''}
        </div>
    )
  }

  renderInput = () => {
    const {data} = this.props
    return (
        <input
            style={{display:'flex',flex:1}}
            placeholder={`请输入${data.name}`}
        />
    )
  }

  render() {
    return (
      <div style={{display:"flex",flexDirection:'row-reverse',flex:1}}>
        {this.renderLabel()}
        {this.renderInput()}
      </div>
    )
  }
}
