import React, { Component } from 'react';
import {Form, Modal,Input ,Button } from 'antd'
import LoadComponent from '@/components/LoadComponent'
import { connect } from 'dva'
import request from '@/utils/request'
import  {getLogin} from '../utils/utils';
import cookie from "react-cookies";
import requestBack from "../utils/backLogin";
import { domain, domainLogin } from "../env";
const FormItem = Form.Item;

class NewAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
 
    };
  }
  componentDidMount() {
    this.props.form.resetFields();
  }

  
  onSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        delete values.pass;
        this.setState({
          loading: true
        }, () => {
          request(`/admin/supeuser/updateUserPassWord`, {
          ...values
          }).then(res => {
            if (res.code === 200) {
              // message.success('修改密码成功！')
              this.props.onClose&&this.props.onClose();
               this.loginOut()
            } else {
              this.setState({
                loading: false
              });
              // message.error(res.msg)
            }
          }).catch(() => {
            this.setState({
              loading: false
            });
          });
         });

      }
    })
    

  };

  loginOut = () => {
    const loginType = cookie.load('loginType')||0;
    const token=cookie.load('token')||0;
    // console.log(loginType)
    if(token){
          requestBack("/auth/authentication/removeToken", {
            accesstoken: cookie.load("token")
          }).then(e => {
            if (e.code == 200) {
              cookie.remove("token", { domain: domain });
              cookie.remove("tokenType", { domain: domain });
              cookie.remove("user", { domain: domain });
              this.props.dispatch({ type: "clearModel/clearAll" });
               getLogin(loginType,this)
              // message.success("退出成功");
            } else {
              // message.error("退出失败");
            }
         });
      
    }else{
      this.props.dispatch({ type: "clearModel/clearAll" });
      getLogin(loginType,this)
      // message.success("退出成功");
    }
   
  };

  onCancel = () => {
    // message.info('请修改密码！')
  };

  handleConfirmPassword=(rule,value,callback)=>{
    const {getFieldValue} = this.props.form;
    if(value&&value!==getFieldValue('pass')){
      callback('两次输入不一致！')
    }
    callback();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };


    return (
      <Modal maskClosable={false}
        title={'请修改密码'}
        style={{ top: '10%' }}
        visible={true}
        closable = {false}
        maskClosable={false}
        footer={[
            
            <Button key="submit" type="primary"  onClick={this.onSubmit}>
              确认修改
            </Button>,
          ]}
         onCancel={this.onCancel}
      >
        <LoadComponent isShow={false}>
            <div style={{lineHeight:'32px',textAlign:'center'}}>
                <div>您现在的密码是初始密码</div>
                <div style={{marginBottom:12}}>
                    <span style={{color:'red'}}>安全度极低</span>
                    请
                    <span style={{color:'red'}}>重置密码</span>
                    确保信息安全
                </div>
            </div>
          <Form style={{ overflow: 'hidden' }}>
            <FormItem {...formItemLayout} label="原密码">
              {getFieldDecorator('upasswd', {
                initialValue: '',
                rules: [{
                  required: true, message: '请输入原密码'
                },{
                  validator:(rule, value, callback) => {
                    if(!/^[A-Za-z0-9~!@#$%^&*]{6,16}$/.test(value)){
                      callback("请输入6到16位字母数字特殊符号");
                    }
                    callback();
                  }
                    // /^[A-Za-z0-9]+$/
                }]
              })(
                <Input type="password" placeholder={'请输入原密码'} />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="密码">
              {getFieldDecorator('pass', {
                initialValue: '',
                rules: [{
                  required: true, message: '请输入密码'
                },{
                  validator:(rule, value, callback) => {
                    if(!/^[A-Za-z0-9]{6,16}$/.test(value)){
                      callback("请输入6到16位字母数字");
                    }
                    callback();
                  }
                    // /^[A-Za-z0-9]+$/
                }]
              })(
                <Input type="password" placeholder={'请输入重置密码'} />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="确认密码">
              {getFieldDecorator('newupasswd', {
                initialValue: '',
                rules: [{
                  required: true, message: '请再次输入密码'
                },{
                  validator:(rule, value, callback) => {
                    if(!/^[A-Za-z0-9]{6,16}$/.test(value)){
                      callback("请输入6到16位字母数字");
                    }
                    callback();
                  }
                    // /^[A-Za-z0-9]+$/
                }, {
                  validator: this.handleConfirmPassword
                }]
              })(
                <Input type="password" placeholder={'请再次输入重置密码'} />
              )}
            </FormItem>

            
          </Form>
        </LoadComponent>
      </Modal>
    )
  }
}
function mapStateToProps(state) {
  return {
    ...state.user
  };
}

export default connect(mapStateToProps)(Form.create()(NewAdd))