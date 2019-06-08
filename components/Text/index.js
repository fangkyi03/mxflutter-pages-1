import React, { Component } from 'react'
import styles from './index.less';

export default class Text extends Component {
  render() {
    const {numLine} = this.props
    return (
      <div className={styles.numLine} style={{WebkitLineClamp:numLine}}>
        {this.props.children}
      </div>
    )
  }
}
