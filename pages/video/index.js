import React, { Component } from 'react'
import styles from './index.less'
import LoadingComponent from '../../components/LoadComponent';
import createDva from '../../command/createDva';
import apiTool from '../../command/apiTool';

@createDva(['video'])
export default class Video extends Component {

  componentDidMount() {
  }

  renderBkImage = () =>{
    return (
      <img src={require('../../images/video/bgc.png')} className={styles.bkImage}/>
    )
  }

  renderList = () =>{
    return (
      <div>
        123123123123
      </div>
    )
  }

  renderView = () =>{
    return (
      <div style={{flex:1,display:'flex'}}>
        {/* 渲染背景 */}
        {this.renderBkImage()}
        {/* 渲染列表 */}
        {this.renderList()}
      </div>
    )
  }

  render() {
    const {isShow} = this.props
    return (
      <div className={styles.main}>
        <LoadingComponent
          isShow={isShow}
          renderView={this.renderView}
        />
      </div>
    )
  }
}
