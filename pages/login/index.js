import React, { Component } from 'react'
import styles from './index.less'
// import {Button} from 'antd'

// import Swiper from "swiper";
// import { form, input, Row, Col, button, Icon, message } from 'antd';
// import cookie from 'react-cookies'
// import fetch from 'dva/fetch';
import './index.less';
// import { domain, domainLogin } from "../../env"
// import api from "../../command/api";
// import { routerRedux } from 'dva/router';
// import createDva from "../../command/createDva";
// import androidImg from '../../images/welcom/PQKJ.png'
// import IOSimg from '../../images/LoginNew/ios.png'
// import printImg from '../../images/LoginNew/ic_down.png'
// import { callbackify } from 'util';
// const FormItem = form.Item;
const params = (params) => {
    let arr = []
    Object.keys(params).forEach((key) => arr.push(key + '=' + params[key]));
    return arr.join('&')
}

// @createDva(["loginNew"])
class Login extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            tabKey: 1,
            isPhone: false,
            btnDefault: false,
            btnNumber: 60
        };
        this.codeList = [
            // {txt:'IOS下载',img_src:androidImg},
            // { txt: 'Android下载', img_src: androidImg },
            // { txt: 'IOS下载', img_src: IOSimg }
            // {txt:'IOS下载',img_src:androidImg},

        ];
        this.uploadList = [
            // { txt: '打印程序驱动', img_src: printImg, aUrl: 'https://pan.baidu.com/s/1TEigJIkvUgVkgs51moPbtg' },
            // { txt: '台办驱动', img_src: printImg, aUrl: 'https://pan.baidu.com/s/1fPkDRleG7D9wqRNKuKT_sg' },
            // { txt: '汉印驱动', img_src: printImg, aUrl: 'https://pan.baidu.com/s/1Z303Fp13zfLZKYVCgTHqsQ' },
            // { txt: 'XT300热敏方式打印设置', img_src: printImg, aUrl: 'https://pan.baidu.com/s/11YFLC850pTKib_1Y6AN4Ew' },
            // { txt: '汉印打印机参数设置', img_src: printImg, aUrl: 'https://pan.baidu.com/s/10j_tWzj69N9AURHvS4FtIw' },

        ]
    }

    componentDidMount() {
        // let swiper = new Swiper('.swiper-container', {
        //     autoHeight: true,
        //     loop: true,
        //     centeredSlides: true,
        //     loading: false,
        //     autoplay: {
        //         delay: 3000
        //     }
        // });
        // console.log('swiper----------------', swiper)
        // swiper.autoplay.start()
        let token = '';

        if (token) {
            // api.send(this, [
            //     api.UumUserController_ADMIN("loginNew").infoUsingPOST({})({
            //         onCallBack: res => {
            //             //   if (res.data.uumUser.mobile === '17833334444') {
            //             //     //this.props.dispatch(routerRedux.replace('/NewMain'))
            //             //   }else {
            //             //    // this.props.dispatch(routerRedux.replace('/indexHome'))
            //             //   }
            //             //  this.props.dispatch(routerRedux.replace('/yellowPage'))
            //             //this.getLocationName()
            //             let url = this.getLocationName();
            //             // console.log(url)
            //             //  window.location.href =  url;
            //         },
            //         onError: () => {
            //         }
            //     })
            // ]);
        }
    }

    renderBodyFootView = () => {
        const data = ['技术支持：浙江中兴慧农信息科技有限公司']
        return (
            <div className={styles.bodyFootView}>
                {
                    data.map((e, i) => {
                        return (
                            <span key={i} style={{ color: 'white', fontFamily: 'MicrosoftYaHei', fontSize: 14 }}>{e}</span>
                        )
                    })
                }
            </div>
        )
    }

    tableChange = (data) => {
        this.setState({
            isPhone: data
        })
    }

    renderLoginHeader = () => {
        let isPhone = this.state.isPhone

        return (
            <div className={styles.loginViewHeader}>
                <div
                    className={isPhone ? styles.usrLogin : styles.usrLoginACT}
                    onClick={() => this.tableChange(false)}
                >
                    账号登录
                </div>
                <div className={styles.usrLogin}>
                    |
                </div>
                <div
                    className={isPhone ? styles.usrLoginACT : styles.usrLogin}
                    onClick={() => this.tableChange(true)}
                >
                    手机登录
                </div>
            </div>
        )
    }
    getLocationName = () => {
        const hostname = window.location.hostname;
        if (hostname.indexOf('nongqibang.com') > -1) {
            window.location.href = "http://supe.nongqibang.com:7001/#/welcomThisWay"
            // window.location.href = "http://supe.ztesa.com.cn:7001/#/yellowPage"
        } else if (hostname.indexOf('ztesa.com.cn') > 1) {
            window.location.href = "http://supe.ztesa.com.cn:7001/#/welcomThisWay"

        } else {
            // this.props.dispatch(routerRedux.replace('/welcomThisWay'));
        }
        return true
    }
    onLogin = (e) => {

        e.preventDefault();
        this.props.form.validateFields((err, val) => {
            if (!err) {
                let vals = {
                    ...val,
                    randomStr: new Date().getTime(),
                    code: '1',
                    grant_type: 'password',
                    type: 1,
                    scope: 'server'
                }
                window.location.href = '/welcomThisWay'
                // api.send(this, [
                //     {
                //         url: "/auth/oauth/token",
                //         method: "Login",
                //         params: vals,
                //     },
                //     api.UumUserController_ADMIN('userinfo').infoUsingPOST()({
                //         tranData: ({ data }) => {
                //             return { uumUser: data.uumUser, loginType: 1 }
                //         },
                //         onCallBack: ({ retData }) => {
                //             window.localStorage.setItem('deptId', `${retData.uumUser.deptId}`)
                //             this.getLocationName();
                //             cookie.save('loginType', '1', { domain: domain })
                //         }
                //     })
                // ]);
            }
        });
    }
    renderbtn = () => {
        //console.log()
        return (
            <div className={'login-btn'} style={{ width: '100%' }}>
                <button
                    size={'large'}
                    type={'primary'}
                    // onClick={this.state.isPhone ? this.onPhoneLogin : this.onLogin}
                    style={{ width: '100%', backgroundColor: '#3FBA2C', borderRadius: 0, border: 'none' }}
                    // htmlType={'submit'}
                    // loading={this.state.loading}
                >
                    登录
            </button>
            </div>
        )
    }

    onPhoneLogin = (e) => {//手机登录按钮点击
        e.preventDefault();
        this.props.form.validateFields((err, val) => {
            if (!err) {
                // api.send(this, [
                //     {
                //         url: "/api/auth/mobile/token",
                //         method: "LoginMobile",
                //         params: {
                //             mobile: val.username,
                //             code: val.phone,
                //             randomStr: new Date().getTime().toString(),
                //             grant_type: 'mobile',
                //             type: '0',
                //             scopt: 'server'
                //         },
                //     },
                //     api.UumUserController_ADMIN('userinfo').infoUsingPOST()({
                //         tranData: ({ data }) => {
                //             return { uumUser: data.uumUser, loginType: 1 }
                //         },
                //         onCallBack: ({ retData }) => {
                //             console.log('输出userinfo', retData)
                //             this.getLocationName();
                //             cookie.save('loginType', '1', { domain: domain })
                //         }
                //     })
                // ]);
                // this.props.dispatch({
                //     type: 'fetch/send', payload: [
                //         {
                //             // target: 'ProduceList',
                //             url: '/auth/mobile/token',
                //             method: 'LoginMobile',
                //             params: {
                //                 mobile: val.username,
                //                 code: val.phone,
                //                 randomStr: new Date().getTime().toString(),
                //                 grant_type: 'mobile',
                //                 type: '0',
                //                 scopt: 'server'
                //             },
                //             isOnlyNet: true,
                //             // host: '/zsApi',
                //             tranData: ({ data }) => {
                //                 //return {data:data};
                //             },
                //         },
                //     ]
                // });
            }

        });
    }

    getCheckCode = () => {//获得验证码点击事件
        this.props.form.validateFields((err, val) => {
            console.log(val)


            this.props.dispatch({
                type: 'fetch/send', payload: [
                    {
                        target: 'ProduceList',
                        url: '/app/firm/shortMessage/sendMessage',
                        method: 'POST',
                        params: {
                            phoneNumbers: val.username
                        },
                        // host: '/zsApi',
                        tranData: ({ data }) => {
                            //return {data:data};
                            this.setState({
                                btnDefault: true
                            }, () => {
                                this.Timebtn = setInterval(
                                    () => {
                                        if (this.state.btnNumber < 1) {
                                            clearInterval(this.Timebtn)
                                            this.setState({
                                                btnDefault: false,
                                                btnNumber: 60
                                            })
                                            return
                                        }

                                        this.setState({
                                            btnNumber: this.state.btnNumber - 1,
                                        })
                                    }, 1000
                                )
                            })
                        },
                    },
                ]
            });

        })
    }

    renderPhoneForm = () => {//渲染手机登录
        // const { getFieldDecorator } = this.props.form;

        return (
            <form onSubmit={this.onPhoneLogin} style={{ width: '100%' }}>
                <div
                    className={'formItemNew'}
                    style={{
                        marginTop: 38,
                        lineHeight: '24px',
                        color: '#3A3939',
                        fontFamily: 'MicrosoftYaHei',
                        fontWeight: 400,
                        fontSize: 14
                    }}
                >
                    <span>手机号</span>
                    <input
                        // prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        size="default"
                        className={'inputBottom'}
                        style={{ border: 'none', borderBottom: '1px solid #E5E5E5', borderRadius: 0, }}
                        placeholder={'请输入您的手机号'} />
                    <span style={{ display: 'block', }}>输入验证码</span>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '24px',
                        }}
                    >
                        <input
                            // prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            className={'inputBottom'}
                            onPressEnter={this.onPhoneLogin}
                            size="default" placeholder={'请输入验证码'}
                            style={{
                                width: '250px',
                                border: 'none',
                                borderBottom: '1px solid #E5E5E5',
                                borderRadius: 0,
                            }}
                            type={'input'} />
                        <button
                            disabled={this.state.btnDefault}
                            style={{
                                backgroundColor: `${this.state.btnDefault ? '#ccc' : 'rgb(63, 186, 44)'}`,
                                color: '#fff',
                            }}
                            onClick={this.getCheckCode}
                        >
                            获取验证码{this.state.btnDefault ? `(${this.state.btnNumber})` : ''}
                        </button>
                    </div>

                </div>
            </form>
        )
    }

    renderForm = () => {//渲染账号登录
        // const { getFieldDecorator } = this.props.form;
        return (
            <form onSubmit={this.onLogin} style={{ width: '100%' }}>
                <div
                    className={'formItemNew'}

                    style={{
                        marginTop: 38,
                        lineHeight: '24px',
                        color: '#3A3939',
                        fontFamily: 'MicrosoftYaHei',
                        fontWeight: 400,
                        fontSize: 14
                    }}
                >
                    <span>账号</span>
                    <input
                        // prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        size="default"
                        className={'inputBottom'}
                        style={{ border: 'none', borderBottom: '1px solid #E5E5E5', borderRadius: 0, }}
                        placeholder={'请输入您的账号'} />
                    <span   >输入密码</span>
                    <input
                        // prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        className={'inputBottom'}
                        onPressEnter={this.onLogin}
                        size="default" placeholder={'请输入密码'}
                        style={{ border: 'none', borderBottom: '1px solid #E5E5E5', borderRadius: 0 }}
                        type={'password'} />
                </div>
            </form>
        )
    }
    renderCode = () => {
        return (
            <div></div>
            // <row style={{ width: '100%', borderTop: '2px dashed rgba(220,220,220,1)', padding: '12px 0', marginTop: 12 }}>
            //     {
            //         this.codeList.map((item, i) => (
            //             {/* <col style={{ textAlign: 'center' }} span={6} offset={i % 3 !== 0 ? 3 : 0}>
            //                 <img src={item.img_src} alt={'二维码'} style={{ width: '100%', height: 'auto' }} />
            //                 <br />
            //                 <span>{item.txt}</span>
            //             </col> */}
            //         ))
            //     }
            // </row>
        )
    }
    renderPrint = () => {
        return (
            <div>
                <div style={{ width: '372px', borderTop: '2px dashed  rgba(220,220,220,1)', fontSize: '12px', paddingTop: '3px' }}>
                    {/*  */}
                    <p style={{ color: '#999', lineHeight: "21px", height: '21px', margin: "0" }}>工具下载</p>
                    <div className={styles.printerDownload}>
                        <div className={styles.printerDownloadBox}>
                            {
                                this.uploadList.map((item, i) => (
                                    <div key={i} style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                                        <img
                                            src={item.img_src || ''}
                                            alt={'图片'}
                                            style={{ width: '30px', height: 'auto', paddingRight: '12px' }}
                                        />
                                        <a href={item.aUrl} target={'_blank'} style={{ cursor: 'pointer', color: '#3FBA2C' }}>{item.txt}</a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* <Icon type = {'double-right'}  style = {{color:'#3FBA2C',float:'right',position:'absolute',padding:4,backgroundColor:'#fff'}} /> */}
                </div>

            </div>

        )
    }
    renderBodyRight = () => {
        let isPhone = this.state.isPhone

        return (
            <div className={styles.bodyRight}>
                <div className={styles.loginView}>
                    {this.renderLoginHeader()}
                    {/* 列表 */}
                    {isPhone ? this.renderPhoneForm() : this.renderForm()}
                    {this.renderbtn()}
                    {/* 二维码 */}
                    {this.renderCode()}
                    {/* 二维码 */}
                    {this.renderPrint()}
                </div>
            </div>
        )
    }

    renderBodyLeft = () => {
        const data = [
            // require('../../images/LoginNew/banner1.png'),
            // require('../../images/LoginNew/banner2.png'),
            // require('../../images/LoginNew/banner3.png')
        ]
        const text = ['客服服务：0574-55841200', '技术服务：0574-55843501']
        // const text = ['技术服务：0574-55843501']
        return (
            <div className={styles.bodyLeft}>
                {/* <div className="swiper-no-swiping"> */}
                <div className={'swiper-container swiper-no-swiping'} style={{ zIndex: 1, paddingLeft: 30, paddingTop: 20, overflow: 'hidden' }}>
                    <div className={'swiper-wrapper'}>
                        {
                            data.map((e, i) => {
                                return (
                                    <div className={'swiper-slide'} key={i}>
                                        <img src={e} width={470} height={'80%'} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* </div> */}

                <div style={{ width: 450, justifyContent: 'space-between', alignItems: 'center', display: 'flex', paddingLeft: 10, paddingRight: 10, marginBottom: 20 }}>
                    {
                        text.map((e, i) => {
                            return (
                                <span key={i} style={{ fontSize: 14 }}>{e}</span>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className={styles.main}>
                <div className={styles.bodyView}>
                    <div className={styles.bodyHeader} />
                    <div className={styles.body}>
                        {this.renderBodyLeft()}
                        {this.renderBodyRight()}
                    </div>
                    <div className={styles.bodyFoot} />
                    {/* 去掉备案号 */}
                    {this.renderBodyFootView()}
                </div>
            </div>
        )
    }
}

export default Login