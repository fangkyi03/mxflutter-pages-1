import React, { Component } from 'react'
import createDva from '../../command/createDva';
import { Dropdown, Menu, message } from 'antd';
import styles from './index.less'
import apiTool from '../../command/apiTool';
import FormModal from '../FormModal';
import cookie from "react-cookies";

@createDva(['userInfo'])
export default class Header extends Component {

    constructor(props) {
        super(props);
        this.formModalData = [
            {
                name:'原密码',
                type:'input',
                key:'upasswd',
                props: {
                    type: 'password'
                },
                rules:[
                    {
                        required:true
                    }
                ]
            },
            {
                name:"密码",
                key:'pass',
                type:'input',
                props:{
                    type:'password'
                },
                rules: [
                    {
                        required: true
                    }
                ]
            },
            {
                name:'确认密码',
                key:'newupasswd',
                type:'input',
                props: {
                    type: 'password'
                },
                rules: [
                    {
                        required: true
                    }
                ]
            }
        ]
        this.formModal = createDva(['headerModal'])(FormModal)
    }
    
    componentDidMount() {
        apiTool.send(this, [
            {
                url: '/admin/user/info',
                target: 'userInfo',
                tranData: ({ data }) => {
                    return { info: data }
                },
                onError:()=>{
                    apiTool.jumpRouter('login')
                }
            }
        ])
    }

    getUserInfoMenu = () => {
        const data = [
            {
                name: '修改密码',
                onClick: this.onChangePassWord
            },
            {
                name: "退出登录",
                onClick: this.onExitLogin
            }
        ]
        return (
            <Menu>
                {
                    data.map((e, i) => {
                        return (
                            <Menu.Item key={i} onClick={e.onClick}>
                                <div>{e.name}</div>
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        )
    }

    onChangePassWord = () => {
        apiTool.toggleModal(this,'headerModal')
    }

    onExitLogin = () => {
        const domain = apiTool.isDev()
        cookie.save('tokenType', '' , { domain: domain })
        cookie.save('token', '', { domain: domain })
        localStorage.setItem('username', '')
        localStorage.setItem('password', '')
        localStorage.setItem('check', 0)
        apiTool.jumpRouter('login')
    }

    onJumpBi = () => {
        apiTool.jumpRouter('publicService')
    }

    onModalOk = (data) => {
        if (!data.error) {
            apiTool.send(this, [
                {
                    url: '/admin/supeuser/updateUserPassWord',
                    params: data.dataSource,
                    onCallBack:()=>{
                        message.success('修改密码成功')
                        apiTool.toggleModal(this, 'headerModal', false)
                        apiTool.clearForm(this,'headerModal')
                    },
                    onError:()=>{
                        message.error('修改密码失败')
                    }
                }
            ])
        }
    }

    onVideoDemo = () =>{
        apiTool.jumpRouter('ParkSafety')
    }

    render() {
        const { info = { uumUser: { uname: '' } } } = this.props
        const FormModalView = this.formModal
        return (
            <div className={styles.header}>
                <div>
                    {/* <div
                        onClick={this.onJumpBi}
                        style={{ background: '#001529', color: 'white' }}
                    >
                    </div>
                    <div onClick={this.onVideoDemo}>视频演示</div> */}
                </div>
                <Dropdown
                    overlay={this.getUserInfoMenu()}
                >
                    <div>{info.uumUser.uname}</div>
                </Dropdown>
                <FormModalView 
                    title={'密码修改'}
                    isClear={true}
                    data={this.formModalData}
                    onOk={this.onModalOk}
                />
            </div>
        )
    }
}
