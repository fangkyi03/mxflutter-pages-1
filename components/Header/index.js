import React, { Component } from 'react'
import apiTool from '../../command/apiTool'
import styles from './index.less'

export default class Header extends Component {

  constructor(props) {
      super(props);
      this.state = {
        isShowMenu:false
      }
  }

  renderMenu = (item) => {
    return (
        <div    
            onClick={()=>apiTool.jumpRouter(item.router)}
            className={styles.menu}
        >
            {item.name}
        </div>
    )
  }

  onJumpHome = () => {
    apiTool.jumpRouter('index')
  }

  renderMenuGroup = () => {
    const data = [
        {
            'name':'首页',
            'router':'index'
        },
        // {
        //     'name':'关于八鲜优品'
        // },
        {
            'name':'客服服务',
            'router':'customerService'
        }
    ]
    return (
        <div className={styles.menuGroup}>
            {
                data.map((e)=>{
                    return this.renderMenu(e)
                })
            }
        </div>
    )
  }

  onMenuDown = () => {
    this.setState({isShowMenu:!this.state.isShowMenu})
  }

  render() {
    const {isShowMenu} = this.state
    return (
        <div className={styles.slogan}>
            <img src={require('../../images/Index/logo.png')} style={{ width: apiTool.getSize(231), height: apiTool.getSize(61) }} />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={require('../../images/Index/slogan.png')} style={{ width: apiTool.getSize(265), height: apiTool.getSize(26) }} />
                <img
                    onClick={this.onMenuDown}
                    src={require('../../images/Index/menu.png')} style={{ width: apiTool.getSize(40), height: apiTool.getSize(40), marginLeft: apiTool.getSize(22) }}
                />
            </div>
            {isShowMenu && this.renderMenuGroup()}
        </div>
    )
  }
}
