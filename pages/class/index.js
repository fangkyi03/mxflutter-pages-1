import React, { Component } from 'react'
import styles from './index.less'
import apiTool from '../../command/apiTool'
import ListPage from '../../components/ListView';
import IconGroup from '../../components/IconGroup';
import ShopItem from '../../components/ShopItem';

export default class Class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      select:0,
      topSelect:0,
      filterButtonSelect:0,
      filterTeSeSelect:0,
      showXiaLa:false,
      showFilterModal:false
    }
  }
  
  renderInput = () => {
    return (
        <div className={styles.input}>
            <img src={require('../../images/Index/search.png')}/>
            <label>请输入商品名称</label>
        </div>
    )
  }

  rendeHeader = () => {
    return (
        <div className={styles.header}>
            <div style={{display:'flex',alignItems:'center'}}>
                <img src={require('../../images/Component/HeaderSearch/left.png')} style={{ width: apiTool.getSize(40), height: apiTool.getSize(40) }} />
                {this.renderInput()}
            </div>
            <div style={{display:'flex',alignItems:'center'}} onClick={this.onToggleFilterModal}>
                <div style={{ color:'#666666',fontSize:apiTool.getSize(26),marginRight:apiTool.getSize(10)}}>筛选条件</div>
                <img src={require('../../images/Component/HeaderSearch/right.png')} style={{width:apiTool.getSize(48),height:apiTool.getSize(48)}}/>
            </div>
        </div>
    )
  }

  onLeftItemDown = (index) => {
    this.setState({
      select:index
    })
  }

  renderLeft = () => {
    const data = [
      {
        'name':'蔬菜'
      },
      {
        'name':'水果'
      },
      {
        'name': '禽畜蛋类'
      },
      {
        'name':'水产'
      },
      {
        'name':'农副加工'
      },
      {
        'name':'粮油米面'
      }
    ]
    return (
      <div className={styles.left}>
        {
          data.map((e,i)=>{
            const isSelect = i == this.state.select
            return (
              <div 
                onClick={()=>this.onLeftItemDown(i)}
                className={styles.leftItem}
              >
                {isSelect && <div className={styles.leftLine} style={{width: apiTool.getSize(8), height: apiTool.getSize(40), background:'#2CC76C',borderRadius:'0px 4px 4px 0px'}}/>}
                <span style={{ color: isSelect ? '#2CC76C' :'#323333',fontSize:apiTool.getSize(28)}}>{e.name}</span>
              </div>
            )
          })
        }
      </div>
    )
  }

  onXiaLaDown = () => {
    this.setState({
      showXiaLa:!this.state.showXiaLa
    })
  } 

  onTopDown = (index) => {
    this.setState({
      topSelect:index
    })
  }

  renderXiaLaButotnGroup = (button) => {
    return (
      <div className={styles.xialaButtonGroup}>
        {
          button.map((e,i)=>{
            const isSelect = i == this.state.topSelect
            return (
              <div 
                onClick={()=>this.onTopDown(i)}
                style={{marginRight:i % 3 == 2 ? 0 : 10,marginTop:apiTool.getSize(20)}}
                className={isSelect ? styles.xialaButtonFocus : styles.xialaButtonNormal}
              >
                {e.name}
              </div>
            )
          })
        }
      </div>
    )
  }

  renderTopShowXiaLa = (topData) => {
    return (
      <div className={styles.xialaView}>
        <div className={styles.xialaHeader}>
          <div style={{ color:'#333333',fontSize:apiTool.getSize(38)}}>分类选择</div>
          <div style={{ display: 'flex', alignItems: 'center' }} onClick={this.onXiaLaDown}>
            <div style={{ color:'#999999',fontSize:apiTool.getSize(30),marginRight:apiTool.getSize(10)}}>收起</div>
            <img src={require('../../images/Class/top.png')} style={{width:apiTool.getSize(40),height:apiTool.getSize(40)}}/>
          </div>
        </div>
        {this.renderXiaLaButotnGroup(topData)}
      </div>
    )
  }

  renderRightTop = (topData) => {
    return (
      <div>
        <div className={styles.rightTop}>
          {
            topData.map((e, i) => {
              const isSelect = i == this.state.topSelect
              return (
                <div
                  onClick={() => this.onTopDown(i)}
                  className={isSelect ? styles.focusTopItem : styles.topItem}
                >
                  {e.name}
                </div>
              )
            })
          }
          <img
            src={require('../../images/Class/bottom.png')}
            className={styles.xialaIconButton}
            onClick={this.onXiaLaDown}
          />
        </div>
      </div>
    )
  }

  renderItem = (item) => {
    return (
      <ShopItem data={item}/>
    )
  }

  renderList = (list) => {
    return (
      <div style={{overflow:'hidden',overflowY:'scroll'}}>
        <ListPage
          data={list}
          renderItem={this.renderItem}
          topHeight={250}
        />
      </div>
    )
  }

  renderRight = () => {
    const top = [
      {
        'name':'全部'
      },
      {
        'name':'生菜'
      },
      {
        'name':'菜心'
      },
      {
        'name':'西蓝花'
      },
      {
        'name':'上海青'
      }
    ]
    const list = Array(10).fill(
      {
        'name': '丑柑橘子 不知火2kg装 单 果150g ~250g 10公斤...',
        'area': '宁波市江北区凡山水果专业合作社',
      }
    )
    const {showXiaLa} = this.state
    return (
      <div className={styles.right}>
        {/* 顶部 */}
        {this.renderRightTop(top)}
        {/* 产品列表 */}
        {this.renderList(list)}
        {/* 下拉弹出页面 */}
        {showXiaLa && this.renderTopShowXiaLa(top)}
      </div>
    )
  }

  renderBody = () => {
    return (
      <div style={{display:'flex',flex:1}}>
        {/* 左边 */}
        {this.renderLeft()}
        {/* 右边 */}
        {this.renderRight()}
      </div>
    )
  }

  renderFilterHeader = () => {
    return (
      <div className={styles.filterHeader}>
        <img src={require('../../images/Class/left.png')} onClick={this.onToggleFilterModal}/>
        <div style={{ fontSize: apiTool.getSize(36), color:'#333333'}}>筛选条件</div>
        <div style={{ color:'#666666',fontSize:apiTool.getSize(30)}}>重置条件</div>
      </div>
    )
  }

  renderCharacteristic = () => {
    const data = [
      {
        'name':'纳入监管'
      },
      {
        'name':'溯源'
      },
      {
        'name':'无公害'
      },
      {
        'name':'品控'
      },
      {
        'name':'食责险'
      }
    ]
    return (
      <div className={styles.characteristic}>
        <div style={{ fontSize: apiTool.getSize(26), color:'#333333',fontWeight:'bold'}}>
          特色
        </div>
        <div className={styles.characteristicGroup}>
          {
            data.map((e,i)=>{
              const isSelect = i == this.state.filterTeSeSelect
              return (
                <div 
                  style={{
                    marginTop:apiTool.getSize(20),
                    marginRight:apiTool.getSize(20),
                    display:'flex',alignItems:'center',height:apiTool.getSize(50)
                  }}
                >
                  <img 
                    src={require(`../../images/Class/${isSelect?'select':'normal'}Check.png`)}
                    style={{width:apiTool.getSize(32),height:apiTool.getSize(32)}}  
                  />
                  <div style={{marginLeft:apiTool.getSize(10),fontSize: apiTool.getSize(26), color:'#333333'}}>{e.name}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

  onFilterDown = (index) => { 
    this.setState({
      filterButtonSelect:index
    })
  }

  renderSourceArea = () => {
    const data = [
      {
        'name':'甬江街道'
      },
      {
        'name':'庄桥街道'
      },
      {
        'name':'洪塘街道'
      },
      {
        'name':'中马街道'
      },
      {
        'name':'白沙街道'
      },
      {
        'name':'文教街道'
      },
      {
        'name':'孔浦街道'
      },
      {
        'name':'慈城镇'
      }
    ]
    return (
      <div className={styles.sourceArea}>
        <div style={{color:'#333333',fontSize:apiTool.getSize(26),fontWeight:'bold'}}>原产地</div>
        <div style={{display:'flex',flexWrap:'wrap'}}>
          {
            data.map((e,i)=>{
              const isSelect = i == this.state.filterButtonSelect
              return (
                <div 
                  onClick={()=>this.onFilterDown(i)}
                  style={{marginRight:i % 3 == 2 ? 0 : apiTool.getSize(37),marginTop:apiTool.getSize(10)}}
                  className={isSelect ? styles.xialaButtonFocus : styles.xialaButtonNormal}
                >
                  {e.name}
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

  renderFilterButton = () => {
    return (
      <div className={styles.filterFoot}>
        立即筛选
      </div>
    )
  }

  onToggleFilterModal = () => {
    this.setState({
      showFilterModal:!this.state.showFilterModal
    })
  }
  
  renderFilterModal = () => {
    return (
      <div className={styles.filterModal}>
        <div className={styles.filterModalRight}>
          {/* 筛选标题 */}
          {this.renderFilterHeader()}
          {/* 筛选特色 */}
          {this.renderCharacteristic()}
          {/* 原产地 */}
          {this.renderSourceArea()}
          {/* 筛选底部按钮 */}
          {this.renderFilterButton()}
        </div>
        <div className={styles.shadow} onClick={this.onToggleFilterModal}/>
      </div>
    )
  }

  render() {
    const { showFilterModal } = this.state
    return (
      <div className={styles.main}>
        {/* 头部 */}
        {this.rendeHeader()}
        {/* body */}
        {this.renderBody()}
        {/* 筛选弹窗 */}
        {showFilterModal && this.renderFilterModal()}
      </div>
    )
  }
}
