import React, { Component } from 'react'
import styles from './index.less'

export default class Video extends Component {

  renderBkImage = () =>{
    return (
      <img src={require('../../images/video/bgc.png')} className={styles.bkImage}/>
    )
  }

  renderList = () =>{
    return (
      <div>
        123123
      </div>
    )
  }

  render() {
    return (
      <div className={styles.main}>
        {/* 渲染背景 */}
        {this.renderBkImage()}
        {/* 渲染列表 */}
        {this.renderList()}
      </div>
    )
  }
}
