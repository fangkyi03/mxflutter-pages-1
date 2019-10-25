import React, { Component } from 'react'
import styles from './index.less'
import apiTool from '../../command/apiTool'

export default class HeaderTitle extends Component {

  static defaultProps = {
    isShowBack:true
  }

  
  renderTitle = () => {
    const {title} = this.props
    return (
      <div className={styles.title}>
        {title}
      </div>
    )
  }

  renderShowBack = () => {
    return (
      <img src={require('../../images/Class/left.png')} style={{width:apiTool.getSize(33),height:apiTool.getSize(33)}}/>
    )
  }

  renderLeft = () => {
    const {left,isShowBack} = this.props
    return (
      <div className={styles.left}>
        {left}
        {isShowBack && this.renderShowBack()}
      </div>
    )
  }

  render() {
    return (
      <div className={styles.main}>
        {/* left */}
        {this.renderLeft()}
        {/* 标题 */}
        {this.renderTitle()}
      </div>
    )
  }
}
