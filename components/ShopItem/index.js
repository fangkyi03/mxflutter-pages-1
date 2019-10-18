import React, { Component } from 'react'
import IconGroup from '../IconGroup'
import styles from './index.less'
import apiTool from '../../command/apiTool'

export default class ShopItem extends Component {
  render() {
    const {data} = this.props
    return (
        <div className={styles.listItem}>
            <div className={styles.listItemHeader}>
                <div className={styles.listItemImg}>
                    <img src={'http://rrd.me/eFVp2'} />
                </div>
                <div style={{ display: "flex", flex: 1, flexDirection: 'column' }}>
                    <div style={{ fontWeight: 'bold', color: '#2E3333', fontSize: apiTool.getSize(28) }}>{data.name}</div>
                    <div style={{ color: '#666666', fontSize: apiTool.getSize(26) }}>宁波市江北区凡山水果专业合作社</div>
                    <div style={{ color: '#2BC66C', fontSize: apiTool.getSize(26) }}>￥45.00 ~￥4455.00</div>
                </div>
            </div>
            <IconGroup />
        </div>
    )
  }
}
