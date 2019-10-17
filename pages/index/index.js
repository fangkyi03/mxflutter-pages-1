import React, { Component } from 'react'
import styles from './index.less'
import apiTool from '../../command/apiTool';
import Header from '../../components/Header';

export default class Index extends Component {
 
  static defaultProps = {
    card:Array(10).fill(
        {
            'title': '江北特色·田间联盟馆',
            'labelData': ['纳入监管', '溯源', '无公害', '品控', '食责险'],
            'shop': Array(3).fill(
                {
                    'name': '丑柑橘子丑柑橘子橘子橘子橘...',
                    'price': 45,
                    'img': 'http://rrd.me/eFqkw'
                }
            )
        }
    ), 
    icon:[
          {
              'name': '蔬菜',
              'icon': 'shucai'
          },
          {
              'name': '水果',
              'icon': 'shuiguo'
          },
          {
              'name': '禽畜蛋类',
              'icon': 'rou'
          },
          {
              'name': '水产',
              'icon': 'shuichan'
          },
          {
              'name': '农副加工',
              'icon': 'nongfu'
          }
    ]
  }

  onMenuDown = () => {
    this.setState({isShowMenu:!this.state.isShowMenu})
  }

  renderSlogan = () => {
    return (
        <div className={styles.slogan}>
            <img src={require('../../images/Index/logo.png')} style={{width:apiTool.getSize(231),height:apiTool.getSize(61)}}/>
            <div style={{display:'flex',alignItems:'center'}}>
                <img src={require('../../images/Index/slogan.png')} style={{width:apiTool.getSize(265),height:apiTool.getSize(26)}}/>
                <img 
                    onClick={this.onMenuDown}
                    src={require('../../images/Index/menu.png')} style={{width:apiTool.getSize(40),height:apiTool.getSize(40),marginLeft:apiTool.getSize(22)}}    
                />
            </div>
        </div>
    )
  } 

  renderHeaderInput = () => {
    return (
        <div style={{display:'flex',flex:1,justifyContent:'flex-end'}}>
            <div className={styles.headerInput}>
                <img src={require('../../images/Index/search.png')} style={{width:apiTool.getSize(35),height:apiTool.getSize(35)}}/>
                <label>搜索</label>
            </div>
        </div>
    )
  }

  renderHeader = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerTitle}>
                <img src={require('../../images/Index/local.png')} style={{ width: apiTool.getSize(30), height: apiTool.getSize(30) }} />
                <div style={{marginLeft:apiTool.getSize(10),color: 'white', fontSize: apiTool.getSize(28) }}>浙江宁波 江北馆</div>
                <img src={require('../../images/Index/xiala.png')} style={{marginLeft:apiTool.getSize(10),width:apiTool.getSize(30),height:apiTool.getSize(30)}}/>
                {this.renderHeaderInput()}
            </div>
        </div>
    )
  }

  renderSwiper = () => {
    return (
        <img src={require('../../images/Index/banner.png')} style={{width:'100%',height:apiTool.getSize(240)}}/>
    )
  }

  renderIcon = (item) => {
    return (
        <div className={styles.icon}>
            <img src={require(`../../images/Index/${item.icon}.png`)} className={styles.iconImage}/>
            <div style={{fontSize:apiTool.getSize(28)}}>{item.name}</div>
        </div>
    )
  }

  renderIconGroup = () => {
    const {icon} = this.props
    return (
        <div>
            <div className={styles.iconGroup}>
                {
                    icon.map((e) => {
                        return this.renderIcon(e)
                    })
                }
            </div>
        </div>
    )
  }

  renderView = () => {
    return (
        <div className={styles.view}>
            {/* 轮播图 */}
            {this.renderSwiper()}
            {/* 九宫格 */}
            {this.renderIconGroup()}
            {/* 卡片组 */}
            {this.renderCardGroup()}
        </div>
    )
  }

  renderCardTitleIcon = (iconGroup) => {
    return (
        <div className={styles.cardTitleIcon}>
            {
                iconGroup.map((e)=>{
                    return (
                        <div style={{display:'flex',alignItems:'center',marginLeft:apiTool.getSize(20)}}>
                            <img src={require(`../../images/Index/${e.icon}.png`)} style={{width:apiTool.getSize(30),height:apiTool.getSize(30)}}/>
                            <div style={{marginLeft:apiTool.getSize(10),fontSize:apiTool.getSize(24)}}>{e.name}</div>
                        </div>
                    )
                })
            }
        </div>
    )
  }

  renderCardTitle = (item) => {
    const data = [
        {
            'name':'第三年',
            'icon':'cheng'
        },
        {
            'name':'AA级',
            'icon':'xin'
        }
    ]
    return (
        <div className={styles.cardTitle}>
            <div style={{fontSize:apiTool.getSize(28),color:'#333333'}}>{item.title}</div>
            {/* 卡片标题右边图标 */}
            {this.renderCardTitleIcon(data)}
        </div>
    )
  }

  getCardLabelColor = (name) => {
    switch (name) {
       case '纳入监管':
            return '#FF6D6D';
        case '溯源':
            return '#6D93FF';
        case '无公害':
            return '#11D488';
        case '品控':
            return '#B37DFE';
        case '食责险':
            return '#FF8400';
    }
  }

  renderCardLabel = (label) => {
    return (
        <div className={styles.cardLabel} style={{background:this.getCardLabelColor(label)}}>
            {label}
        </div>
    )
  }

  renderCardLabelGroup = (item) => {
    const { labelData } = item
    return (
        <div className={styles.cardLabelGroup}>
            {
                labelData.map((e)=>{
                    return this.renderCardLabel(e)
                })
            }
        </div>
    )
  }

  renderCardShop = (item) => {
    return (
        <div className={styles.cardShop}>
            <img src={item.img} style={{width:apiTool.getSize(200),height:apiTool.getSize(200)}}/>
            <div style={{ color:'#2BC66C',fontSize:apiTool.getSize(26)}}>{`\￥${item.price}起`}</div>
            <div style={{ color:'#666666',fontSize:apiTool.getSize(26)}}>
                {item.name}
            </div>
        </div>
    )
  }

  renderCardShopGroup = (item) => {
    const {shop} = item
    return (
        <div className={styles.cardShopGroup}>
            {
                shop.map((e)=>{
                    return this.renderCardShop(e)
                })
            }
        </div>
    )
  }

  renderCardFootButton = () => {
    return (
        <div className={styles.cardFoot}>
            <div className={styles.cardFootButton}>
                <div>进入本地供应商</div>
                <img src={require('../../images/Index/cardRightIcon.png')} style={{ width: apiTool.getSize(30), height: apiTool.getSize(30) }} />
            </div>
        </div>
    )
  }

  renderCard = (item) => {
    return (
        <div className={styles.card}>
            {/* 标题头部 */}
            {this.renderCardTitle(item)}
            {/* 卡片标签 */}
            {this.renderCardLabelGroup(item)}
            {/* 卡片商品图片 */}
            {this.renderCardShopGroup(item)}
            {/* 本地供应商 */}
            {this.renderCardFootButton()}
        </div>
    )
  }

  renderCardGroup = () => {
    const {card} = this.props
    return (
        <div className={styles.cardGroup}>
            {
                card.map((e) => {
                    return this.renderCard(e)
                })
            }
        </div>
    )
  }

  renderConsultation = () => {
    const data = [
        {
            'name':'咨询',
            'icon':'zixun'
        },
        {
            'name':'提交需求',
            'icon':'xuqiu'
        }
    ]
    return (
        <div className={styles.consultation}>
            {
                data.map((e,i)=>{
                    return (
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:i?apiTool.getSize(10):0}}>
                            <img src={require(`../../images/Index/${e.icon}.png`)} style={{width:apiTool.getSize(46),height:apiTool.getSize(46)}}/>
                            <div style={{color:'white',fontSize:apiTool.getSize(26)}}>{e.name}</div>
                        </div>
                    )
                })
            }
        </div>
    )
  }

  renderMenu = () => {
    return (
        <div className={styles.menu}>
    
        </div>
    )
  }

  render() {
    return (
      <div className={styles.main}>
        {/* 标语 */}
        <Header/>
        {/* {this.renderSlogan()} */}
        {/* 头部背景 */}
        {this.renderHeader()}
        {/* 内部页面 */}
        {this.renderView()}
        {/* 咨询 提交需求 */}
        {this.renderConsultation()}
      </div>
    )
  }
}
