import React, { Component } from 'react'
import apiTool from '../../command/apiTool'
import styles from './index.less'

export default class FormCode extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        code:60,
        
      }
      this.time = null
  }
  
  onCodeDown = () => {
    if (this.time == null) {
      this.time = setInterval(() => {
        if (this.state.code == 0) {
          clearInterval(this.time)
          this.setState({ code: 60 })
        } else {
          this.setState({
            code: this.state.code - 1
          })
        }
      }, 1000)
    }    
  }
  
  render() {
    const { data } = this.props
    const {code} = this.state
    return (
      <div style={{display:'flex'}}>
        <input placeholder={`请输入${data.name}`} />
        <div    
            onClick={this.onCodeDown}
            className={ code == 60 ? styles.codeNormal : styles.codeDisable}
        >
          {code == 60 ? '获取验证码': code}
        </div>
      </div>
    )
  }
}
