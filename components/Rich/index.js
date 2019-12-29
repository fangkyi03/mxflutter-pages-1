import React, { Component } from 'react'
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'

export default class Rich extends Component {
  render() {
    const {value,} = this.props
    return (
        <BraftEditor 
          {...this.props} 
          value={BraftEditor.createEditorState(value)}
          controlBarStyle={{ border: '1px solid #3333',borderBottomWidth:0,}}
          contentStyle={{border:'1px solid #3333',height:250}}
        />
    )
  }
}
