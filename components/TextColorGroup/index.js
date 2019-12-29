import React, { Component } from 'react'
import styles from './index.less'
import { message, Popconfirm } from 'antd';

export default class TextIconGroup extends Component {

  constructor(props) {
    super(props);
    this.icon = [
      {
        bkColor: "#1E9FFF"
      },
      {
        bkColor: "#FF5722"
      },
      {
        bkColor: "#FFB800"
      },
      {
        bkColor: "#009688"
      }
    ];
  }

  onClick = (item, disable) => {
    if (disable) {
      message.error("当前" + item.name + "被禁用");
    } else {
      const { params = {} } = this.props
      item.onClick && item.onClick(params);
    }
  }

  renderButton = (item, index) => {
    const display = item.display == undefined ? true : item.display
    const disable = item.disable == undefined ? false : item.disable
    if (!display) return null
    const selectColor = this.icon[index % this.icon.length]
    if (item.isPop) {
      return (
        <Popconfirm
          key={index}
          title={item.title || '确定要进行删除吗'}
          okText={'确定'}
          cancelText={'取消'}
          onConfirm={() => this.onClick(item, disable)}
        >
          <div
            className={styles.button}
            style={{ cursor:'pointer',background: disable ? '#eee' : item.bkColor || selectColor.bkColor, color: item.txtColor || selectColor.txtColor || 'white', padding: 10 }}
          >
            {item.name}
          </div>
        </Popconfirm>
      )
    }
    return (
      <div
        key={index}
        className={styles.button}
        style={{ cursor: 'pointer',background: disable ? '#eee' : item.bkColor || selectColor.bkColor, color: item.txtColor || selectColor.txtColor || 'white', padding: 10 }}
        onClick={() => this.onClick(item, disable)}
      >
        {item.name}
      </div>
    )
  }

  render() {
    const { data = [] } = this.props
    return (
      <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {
          data.map((e, i) => {
            return this.renderButton(e, i)
          })
        }
      </div>
    )
  }
}
