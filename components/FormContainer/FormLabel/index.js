import React, { Component } from 'react'
import apiTool from '../../../command/apiTool';

export default class FormLabel extends Component {
  render() {
    const {value} = this.props
    return (
      <div style={{
            width: '100%',
            height:apiTool.getSize(32),
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'center',
            border: '1px solid #ddd',
            backgroundColor: '#fafafa',
            borderRadio: 4
      }}>
        {value}
      </div>
    )
  }
}
