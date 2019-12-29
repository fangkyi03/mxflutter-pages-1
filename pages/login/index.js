// 登录
import React, { Component } from 'react'
import { message, Input } from 'antd';
import apiTool from '../../command/apiTool';
import createDva from '../../command/createDva';
import styles from './index.less'
import classnames from 'classnames'

@createDva([])
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            check: false,
            isShowAnimateLeave: true,
            isLoading: false,
            isFirst: true
        }
        this.loginData = [
            {
                name: '账号',
                type: 'input',
                key: 'username'
            },
            {
                name: '密码',
                type: 'input',
                key: "password"
            }
        ]
    }

    onPostLogin = () => {
        const { username, password, check, isFirst } = this.state
        if (username == '' && password == '' && isFirst) return
        let vals = {
            username,
            password,
            randomStr: new Date().getTime(),
            code: '1',
            grant_type: 'password',
            scope: 'server',
            type: '0'
        }
        apiTool.send(this, [
            {
                url: "/auth/oauth/token",
                method: "Login",
                params: vals,
                onCallBack: (data) => {
                    if (this.state.check) {
                        localStorage.setItem('username', username)
                        localStorage.setItem('password', password)
                        localStorage.setItem('check', check ? 1 : 0)
                    } else {
                        localStorage.setItem('username', '')
                        localStorage.setItem('password', '')
                        localStorage.setItem('check', 0)
                    }
                    apiTool.backRouter()
                },
                onError: ({ retData }) => {
                    if (retData.msg === '非法登录') {
                        message.error('非法登录')
                    } else {
                        message.error('您输入的账号或密码错误，请重新输入')
                    }
                    this.setState({ isLoading: false })
                }
            }
        ])
    }

    componentDidMount() {
        // this._left.addEventListener('animationend', this.onPostLogin, false)
        // this._left.addEventListener('oanimationend', this.onPostLogin, false)
        // this._left.addEventListener('MSAnimationEnd', this.onPostLogin, false)
        // this._left.addEventListener('mozAnimationEnd', this.onPostLogin, false)
        // this._left.addEventListener('webkitAnimationEnd', this.onPostLogin, false)
        this.setState({
            username: localStorage.getItem('username') || '',
            password: localStorage.getItem('password') || '',
            check: localStorage.getItem('check') == '0' ? false : true
        })
    }

    onLoginDown = () => {
        const { username, password } = this.state
        if (username == '' || password == '') {
            message.error('用户名或者密码不能为空')
        } else {
            this.onPostLogin()
        }
    }

    renderIcon = (item, index) => {
        return (
            <div
                style={{ justifyContent: index % 2 == 0 ? 'flex-start' : 'flex-end' }}
                className={styles.icon}
            >
                <img src={require(`../../images/login/icon${index + 1}.png`)} />
                <div>{item.name}</div>
            </div>
        )
    }

    renderIconGroup = (data) => {
        return (
            <div className={styles.iconGroup}>
                {
                    data.map((e, i) => {
                        return this.renderIcon(e, i)
                    })
                }
            </div>
        )
    }

    renderLeft = () => {
        const data = [
            {
                name: '一站式园区云管理',
            },
            {
                name: '物联网实时监测'
            },
            {
                name: '安防监控视频'
            },
            {
                name: '农业监管大数据'
            }
        ]
        const classname = classnames(
            {
                [styles.left]: true,
                // [styles.leftAnimateLeave]:true
                // [styles.leftAnimateEnter]: !this.state.isShowAnimateLeave,
                // [styles.leftAnimateLeave]: this.state.isShowAnimateLeave,
            }
        )
        return (
            <div className={classname} ref={(r) => this._left = r}>
                <div className={styles.title}>
                    欢迎来到
                </div>
                <div className={styles.content}>
                    慈溪市现代农业开发区数字云管理平台
                </div>
                {/* 底部按钮图标 */}
                {this.renderIconGroup(data)}
            </div>
        )
    }

    renderCheck = () => {
        const isFocus = this.state.check
        return (
            <div
                id='button'
                onClick={() => this.setState({ check: !this.state.check })}
                className={styles.check}
            >
                <img src={require(`../../images/login/check${isFocus ? 'Focus' : 'Normal'}.png`)} />
                <div>记住密码</div>
            </div>
        )
    }

    renderLoginButton = () => {
        const { isLoading } = this.state
        return (
            <div
                id='button'
                onClick={this.onLoginDown}
                className={styles.loginButton}
            >
                {isLoading ? '登录中...' : '登录'}
            </div>
        )
    }

    renderRight = () => {
        const data = [
            {
                name: '请输入账号',
                icon: require('../../images/login/user.png'),
                key: 'username'
            },
            {
                name: '请输入密码',
                icon: require('../../images/login/pass.png'),
                isPass: true,
                key: 'password'
            }
        ]
        return (
            <div className={styles.right}>
                <div className={styles.rightTitle}>用户登录</div>
                <div style={{ marginTop: apiTool.getSize(49) }}>
                    {
                        data.map((e, i) => {
                            return (
                                <div
                                    style={{ marginTop: i ? apiTool.getSize(48) : 0 }}
                                    className={styles.input}
                                >
                                    <img src={e.icon} />
                                    <Input
                                        type={e.isPass && 'password'}
                                        placeholder={e.name}
                                        maxLength={15}
                                        value={this.state[e.key]}
                                        onChange={(value) =>
                                            this.setState({
                                                [e.key]: value.currentTarget.value
                                            })
                                        }
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                {/* 记住密码 */}
                {this.renderCheck()}
                {/* 登录按钮 */}
                {this.renderLoginButton()}
            </div>
        )
    }

    renderLogin = () => {
        return (
            <div className={styles.loginView}>
                {/* 登录左边 */}
                {this.renderLeft()}
                {/* 登录右边 */}
                {this.renderRight()}
            </div>
        )
    }

    render() {
        return (
            <div className={styles.main}>
                {/* 登录控制面板 */}
                {this.renderLogin()}
            </div>
        )
    }
}
