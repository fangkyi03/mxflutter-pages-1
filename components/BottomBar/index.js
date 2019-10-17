import React, { Component } from 'react'
import styles from './index.less'
import apiTool from '../../command/apiTool'

export default class BottomBar extends Component {

  onBarDown = (item) => {
    apiTool.jumpRouter(item.key)
  }

  renderBar = () => {
    const { path } = this.props
    const data = [
        {
            'name':'首页',
            'key':'index', 
            'isFocus':path == '/' || path == '/index'
        },
        {
            'name':'分类',
            'key':'class',
            'isFocus':path == '/class'
        },
        {
            'name':'我的',
            'key':'my',
            'isFocus': path == '/my'
        }
    ]
    return data.map((e)=>{
        return (
            <div    
                onClick={()=>this.onBarDown(e)}
                className={styles.tab}
            >
                <img 
                    src={require(`../../images/Component/tabbar/${e.isFocus ? e.key + 'Focus': e.key}.png`)} 
                    style={{width:apiTool.getSize(48),height:apiTool.getSize(48)}}    
                />
                <div style={{ color: e.isFocus ? '#2BC66C' : '#999999',fontSize:apiTool.getSize(22)}}>{e.name}</div>
            </div>
        )
    })
  }

  render() {
    return (
      <div className={styles.main}>
        {this.renderBar()}        
      </div>
    )
  }
}
