import React, { Component } from 'react'
import apiTool from '../../command/apiTool'
import styles from './index.less'

export default class My extends Component {

  renderBk = () => {
    return (
      <div style={{display:"flex",flexDirection:'column',flex:1}}>
        <img src={require('../../images/My/bk.png')} style={{ width: '100%', height: apiTool.getSize(267) }} />
        <div style={{display:'flex',flex:1,background:'#f8f8f8'}}/>
      </div>
    )
  }

  renderCardEdit = () => {
    return (
      <div className={styles.cardEdit}>

      </div>
    )
  }

  renderCardIconGroup = () => {
    const data = [
      {
        'name':'认证',
        'icon':require('../../images/My/cheng.png')
      },
      {
        'name':'诚信1年',
        'icon': require('../../images/My/xin.png')
      }
    ]
    return (
      <div style={{ display: 'flex', alignItems: 'center', color:'#A3A3A3',fontSize:apiTool.getSize(24),marginTop:apiTool.getSize(10)}}>
        {
          data.map((e)=>{
            return (
              <div style={{display:'flex',alignItems:'center',marginRight:apiTool.getSize(10)}}>
                <img src={e.icon} style={{width:apiTool.getSize(40),height:apiTool.getSize(40)}}/>
                <div>{e.name}</div>
              </div>
            )
          })
        }
      </div>
    )
  }

  renderCardFoot = () =>{
    return (
      <div style={{marginTop:apiTool.getSize(26),display: 'flex', alignItems: 'center', color:'#999899',fontSize:apiTool.getSize(28)}}>
        <div>三江俱乐部生鲜超市</div>
      </div>
    )
  }

  renderCard = () => {
    return (
      <div className={styles.card}>   
        <img src={require('../../images/Index/shucai.png')} style={{width:apiTool.getSize(100),height:apiTool.getSize(100),borderRadius:apiTool.getSize(50)}}/>
        <div style={{ color:'#323333',fontSize:apiTool.getSize(32),fontWeight:'bold',marginTop:apiTool.getSize(20)}}>江北萌特优馆</div>
        {this.renderCardIconGroup()}
        {this.renderCardFoot()}
      </div>
    )
  }

  renderRecommendedList = () => {
    const data = Array(100).fill({
      'title':'XXXXXXXXXXXXXXXXXXXXXXXXXXXX合作社',
      'name':'小青菜',
      'number':100
    })
    return (
      <div style={{display:'flex',flexDirection:'column',overflow:'hidden',overflowY:'scroll'}}>
        {
          data.map((e)=>{
            return (
              <div style={{
                  minHeight:apiTool.getSize(130),
                  justifyContent:'center',
                  display:'flex',flexDirection:'column',paddingLeft:apiTool.getSize(30),paddingRight:apiTool.getSize(30)}
                }>
                <div style={{ color:'#333333',fontSize:apiTool.getSize(28)}}>{e.title}</div>
                <div style={{ display: 'flex', alignItems: 'center', color:'#666666',fontSize:apiTool.getSize(26)}}>
                  <div>{e.name}</div>
                  <div>{'可供' + e.number + '斤'}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  // 推荐生产商
  renderRecommendedManufacturer = () => {
    return (
      <div className={styles.recommended}>
        <div className={styles.recommendedTitle}>
          推荐生产商
        </div>
        <div className={styles.recommendedList}>
          {this.renderRecommendedList()}
        </div>
      </div>
    )
  }

  renderSeasonList = () => {
    const data = Array(10).fill({
      'name': '慈溪杨梅',
      'icon': require('../../images/Index/shuichan.png'),
      'foot': '预计产量 200吨'
    })
    return (
      <div style={{display:'flex',flexWrap:'wrap',marginTop:apiTool.getSize(20)}}>
        {
          data.map((e)=>{
            return (
              <div style={{width:'50%',display:'flex',flexDirection:"column",alignItems:'center',marginTop:apiTool.getSize(20)}}>
                <img src={e.icon} style={{ width: apiTool.getSize(300), height: apiTool.getSize(300),border:'1px solid #e5e5e5' }} />
                <div style={{color:'#3E3C3C',fontSize:apiTool.getSize(28)}}>{e.name}</div>
                <div style={{ color:'#A1A1A1',fontSize:apiTool.getSize(26)}}>{e.foot}</div>
              </div>
            )
          })
        }
      </div>
    )
  }

  renderSeason = () => {
    return (
      <div className={styles.recommended}>
        <div className={styles.recommendedTitle}>
          当季即将上市
        </div>
        {this.renderSeasonList()}
      </div>
    )
  }

  renderBody = () => {
    return (
      <div className={styles.body}>
        {/* card */}
        {this.renderCard()}
        {/* 关注 收藏 */}
        {this.renderCollection()}
        {/* 推荐生产商 */}
        {this.renderRecommendedManufacturer()}
        {/* 当季即将上市 */}
        {this.renderSeason()}
      </div>
    )
  }

  renderCollection = () => {
    const data = [
      {
        'name':'收藏的商品',
        'value':0
      },
      {
        'name':'关注供应商',
        'value':15
      },
      {
        'name':'浏览足迹',
        'value':150
      }
    ]
    return (
      <div className={styles.collection}>
        {
          data.map((e)=>{
            return (
              <div style={{display:'flex',flexDirection:'column',flex:1,justifyItems:'center',alignItems:'center'}}>
                <div style={{ color:'#2BC66C',fontSize:apiTool.getSize(40)}}>{e.value}</div>
                <div style={{display:'flex',alignItems:'center'}}>
                  <div style={{ color:'#333333',fontSize:apiTool.getSize(28),marginRight:apiTool.getSize(10)}}>{e.name}</div>
                  <div>{'>'}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  render() {
    return (
      <div style={{flex:1,display:'flex',flexDirection:'column',position:'relative',overflow:'hidden',overflowY:'scroll'}}>
        {/* 背景 */}
        {this.renderBk()}
        {/* 主体 */}
        {this.renderBody()}
      </div>
    )
  }
}
