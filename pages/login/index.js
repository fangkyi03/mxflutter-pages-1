import React, { Component } from 'react'
import styles from './index.less'
import apiTool from '../../command/apiTool'

export default class Login extends Component {

  
  renderLogo = () => {
    return (
        <img src={require('../../images/Index/logo.png')} style={{width:apiTool.getSize(231),height:apiTool.getSize(61)}}/>
    )
  }

  renderFormHeader = () => {
    return (
        <div className={styles.formHeader}>
            账号登录
        </div>
    )
  }

  renderUserName = () => {
    return (
        <div className={styles.userName}>
            <img src={require('../../images/Login/mobile.png')}/>
            <input placeholder={'请输入手机号'}/>
        </div>
    )
  }

  renderVerificationCode = () => {
    return (
        <div className={styles.verificationCode}>
            <img src={require('../../images/Login/edit.png')}/>
            <div style={{display:"flex",flex:1,flexDirection:'row-reverse'}}>
                <div style={{background:'red'}}>验证码</div>
                <div style={{display:'flex',flex:1}}>
                    <input placeholder={'请输入右图中数字'} />
                </div>
            </div>
        </div>
    ) 
  }

  renderConfirmVerificationCode = () => {
    return (
        <div className={styles.verificationCode}>
            <img src={require('../../images/Login/edit.png')} />
            <div style={{ display: "flex", flex: 1, flexDirection: 'row-reverse' }}>
                <div style={{ background: 'red',width:apiTool.getSize(163),height:apiTool.getSize(59) }}>获取验证码</div>
                <div style={{ display: 'flex', flex: 1 }}>
                    <input placeholder={'请输入右图中数字'} />
                </div>
            </div>
        </div>
    )
  }

  renderLoginButton = () => {
    const data = [
        {
            'name':'登录',
            'bkColor':'#D7D7D7',
            'txtColor':'white',
            'borderColor':'#D7D7D7'
        },
        {
            'name':'注册',
            'bkColor':'white',
            'txtColor':'#2BC66C',
            'borderColor':'#2BC66C'
        }
    ]
    return (
        <div className={styles.loginGroup}>
            {
                data.map((e)=>{
                    return (
                        <div 
                            className={styles.loginButton}
                            style={{color:e.txtColor,background:e.bkColor,border:`1px solid ${e.borderColor}`}}
                        >
                            {e.name}
                        </div>
                    )
                })
            }
        </div>
    )
  }

  renderOtherLoginHeader = () => {
    return (
        <div className={styles.otherLoginHeader}>
            <div style={{marginRight:apiTool.getSize(10),width:apiTool.getSize(100),height:apiTool.getSize(2),background:'#e5e5e5'}}/>
            <div>第三方账号登录</div>
            <div style={{ marginLeft:apiTool.getSize(10),width: apiTool.getSize(100), height: apiTool.getSize(2), background: '#e5e5e5' }} />
        </div>
    )
  }

  renderOtherIconButtonGroup = () => {
    const data = [
        {
            'name':'微信',
            'icon':'wechat'
        },
        {
            'name':'QQ',
            'icon':'qq'
        }
    ]
    return (
        <div className={styles.iconButtonGroup}>
            {
                data.map((e)=>{
                    return (
                        <div className={styles.iconButtonItem}>
                            <img src={require(`../../images/Login/${e.icon}.png`)}/>
                            <div>{e.name}</div>
                        </div>
                    )
                })
            }
        </div>
    )
  }

  renderOtherLogin = () => {
    return (
        <div className={styles.otherLogin}>
            {/* 第三方登录头部说明 */}
            {this.renderOtherLoginHeader()}
            {/* 第三方登录按钮组 */}
            {this.renderOtherIconButtonGroup()}
        </div>  
    )
  }

  renderForm = () => {
    return (
        <div style={{display:'flex',flex:1,flexDirection:'column',justifyContent:'center'}}>
            <div className={styles.form}>
                {/* 账号登录 */}
                {this.renderFormHeader()}
                {/* 手机号 */}
                {this.renderUserName()}
                {/* 验证码 */}
                {this.renderVerificationCode()}
                {/* 确认验证码 */}
                {this.renderConfirmVerificationCode()}
                {/* 登录注册 */}
                {this.renderLoginButton()}
                {/* 第三方登录 */}
                {this.renderOtherLogin()}
            </div>
        </div>
    )
  }
  
  render() {
    return (
      <div className={styles.main}>
        {/* logo */}
        {this.renderLogo()}
        {/* form */}
        {this.renderForm()}
      </div>
    )
  }
}
