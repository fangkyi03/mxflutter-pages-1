import React, { Component } from 'react'
import Dynamic from 'next/dynamic'
import styles from './index.less'

const BraftEditor = Dynamic(import('../../Rich'),{ssr:false})
export default class FormRich extends Component {
  render() {
    const {data,...arg} = this.props
    return (
        <BraftEditor
            className={styles.main}
            placeholder={'请输入内容'}
            style={{border:'1px solid #3333'}}
            controls={[
              'undo', 'redo', 'separator',
              'font-size', 'line-height', 'letter-spacing', 'separator',
              'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator',
              'superscript', 'subscript', 'remove-styles', 'emoji', 'separator', 'text-indent', 'text-align', 'separator',
              'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
              'link', 'separator', 'hr', 'separator',
              'media', 'separator',
              'clear'
            ]}
            {...arg}
            {...data.props}
        />
    )
  }
}
