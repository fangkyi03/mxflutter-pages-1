import React, { Component } from 'react'
import styles from './index.less'
import LoadingComponent from '../../components/LoadComponent';
import createDva from '../../command/createDva';
import apiTool from '../../command/apiTool';
import Text from '../../components/Text/index';
import Router from 'next/router'

@createDva(['video'])
export default class Video extends Component {

  componentDidMount() {
    apiTool.send(this,[
      {
        url:'/official/web/officialWeb/listVideo',
        method:'GET',
        target:'video'
      }
    ])
  }

  renderBkImage = () =>{
    return (
      <img src={require('../../images/video/bgc.png')} className={styles.bkImage}/>
    )
  }

  // 播放视频点击事件
  onPlayVideo = (url) =>{
    alert(JSON.stringify(window.test))
    // console.log('输出window' + JSON.stringify(window.postMessageA))
    // window.postMessage.postMessage(url.toString());
  }

  renderList = () =>{
    const {data} = this.props
    return (
      <div className={styles.listView}>
        {
          data.map((e,i)=>{
            return (
              <div key={i} className={styles.listItemView}>
                <img src={e.videoPic}/>
                <div className={styles.listItemFoot}>
                  <h4>{e.videoName}</h4>
                  <Text numLine={2}>{e.remark}</Text>
                  <div className={styles.listItemFootButton} onClick={()=>this.onPlayVideo(e.url)}>点击播放</div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  renderFootProblem = () =>{
    const data = ['请拨打电话：0574-55843501/189 5741 9012','工作时间：法定工作日9：00-18：00']
    return (
      <div className={styles.footProblemView}>
        <h4>如果依然无法解答您的疑问</h4>
        {
          data.map((e,i)=>{
            return (
              <div key={i}>{e}</div>
            )
          })
        }
      </div>
    )
  }

  renderFoot = () =>{
    return (
      <div className={styles.footView}> 
        <div>技术支持:中兴惠农</div>
        <a style={{ color:'rgba(253,160,15,1'}} href={'http://ztesa.com.cn'}>ztesa.com.cn</a>
      </div>
    )
  }

  renderView = () =>{
    return (
      <div style={{flex:1,display:'flex',flexDirection:'column',maxHeight:'100%',overflow:'scroll',paddingBottom:20}}>
        {/* 渲染背景 */}
        {this.renderBkImage()}
        {/* 渲染列表 */}
        {this.renderList()}
        {/* 渲染底部说明 */}
        {this.renderFootProblem()}
        {/* 尾页 */}
        {this.renderFoot()}
        {/* <BackwardFill/> */}
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
