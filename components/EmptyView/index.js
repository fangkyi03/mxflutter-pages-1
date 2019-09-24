import React, { Component } from 'react'
import styles from './index.less'
import { Empty } from 'antd';

export default class EmptyView extends Component {
  render() {
    return (
      <div className={styles.main}>
        <Empty/>
      </div>
    )
  }
}
