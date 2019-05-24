import React, { Component } from 'react'
import styles from './index.less'
// import Swiper from "swiper";
// import { Form} from 'antd';
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
// const FormItem = Form.Item;
const params = (params) => {
    let arr = []
    Object.keys(params).forEach((key) => arr.push(key + '=' + params[key]));
    return arr.join('&')
}

// @createDva(["loginNew"])
class LoginNew extends Component {

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
                // window.location.href = "http://supe.nongqibang.com:7001/#/welcomThisWay"
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
                //             window.localStorage.setItem('deptId',`${retData.uumUser.deptId}` )
                //             this.getLocationName();
                //             // cookie.save('loginType', '1', { domain: domain })
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
                {/* <Button
                    size={'large'}
                    type={'primary'}
                    onClick={this.state.isPhone ? this.onPhoneLogin : this.onLogin}
                    style={{ width: '100%', backgroundColor: '#3FBA2C', borderRadius: 0, border: 'none' }}
                    // htmlType={'submit'}
                    loading={this.state.loading}
                >
                    登录
            </Button> */}
            </div>
        )
    }

    renderForm = () => {//渲染账号登录
        // const { getFieldDecorator } = this.props.form;
        return null
        // return (
            // <Form onSubmit={this.onLogin} style={{ width: '100%' }}>
            //     <div
            //         className={'formItemNew'}

            //         style={{
            //             marginTop: 38,
            //             lineHeight: '24px',
            //             color: '#3A3939',
            //             fontFamily: 'MicrosoftYaHei',
            //             fontWeight: 400,
            //             fontSize: 14
            //         }}
            //     >
            //         <span>账号</span>
            //         <FormItem style={{ marginBottom: 12 }} key={1}>
            //             {getFieldDecorator('username', {
            //                 // initialValue: 'admin1',
            //                 rules: [
            //                     { required: true, message: '请输入账号' },
            //                 ]
            //             })(<Input
            //                 // prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
            //                 size="default"
            //                 className={'inputBottom'}
            //                 style={{ border: 'none', borderBottom: '1px solid #E5E5E5', borderRadius: 0, }}
            //                 placeholder={'请输入您的账号'} />)}
            //         </FormItem>
            //         <span   >输入密码</span>
            //         <FormItem   >
            //             {getFieldDecorator('password', {
            //                 // initialValue: '123456',
            //                 rules: [
            //                     { required: true, message: '请输入密码' }
            //                 ]
            //             })(
            //                 <Input
            //                     // prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
            //                     className={'inputBottom'}
            //                     onPressEnter={this.onLogin}
            //                     size="default" placeholder={'请输入密码'}
            //                     style={{ border: 'none', borderBottom: '1px solid #E5E5E5', borderRadius: 0 }}
            //                     type={'password'} />
            //             )}
            //         </FormItem>
            //     </div>
            // </Form>
        // )
    }


    render() {
        return (
            <div className={styles.main}>
                {this.renderForm()}
                {this.renderbtn()}
            </div>
        )
    }
}

export default LoginNew