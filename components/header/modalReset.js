import React, { Component } from 'react';
import {Form, Modal, message,Input  } from 'antd'
// import LoadComponent from '@/components/LoadComponent'
import { connect } from 'dva'
// import request from '@/utils/request'
// import apiurl from "../../apiurl"

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
   // const { id } = JSON.parse(sessionStorage.getItem('state'));
    const { resetId=0,form} = this.props;
    this.props.form.validateFields((err, values) => {
      // if (!values.roles.length) {
      //   return
      // }
      if (!err) {
        delete values.pass;
        this.setState({
          loading: true
        }, () => {
          // request(`${apiurl.base}supeuser/updateUserPassWord`, {
          // ...values
          // }).then(res => {
          //   if (res.code === 200) {
          //     message.success('重置密码成功！')
          //     this.onCancel()
          //   } else {
          //     this.setState({
          //       loading: false
          //     });
          //     message.error(res.msg)
          //   }
          // }).catch(() => {
          //   this.setState({
          //     loading: false
          //   });
          // });
         });

      }
    })
    // }
  };

  onCancel = () => {
    this.props.onClose&&this.props.onClose();
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
    const { modalShow, formData, tableLoading, } = this.props
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };


    return (
      <Modal maskClosable={false}
        title={'重置密码'}
        onOk={this.onSubmit}
        style={{ top: '10%' }}
        visible={true}
        onCancel={this.onCancel}
      >
        {/* <LoadComponent isShow={tableLoading}>
          <Form style={{ overflow: 'hidden' }}>
            <FormItem {...formItemLayout} label="原密码">
              {getFieldDecorator('upasswd', {
                initialValue: '',
                rules: [{
                  required: true, message: '请输入原密码'
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
                }, {
                  validator: this.handleConfirmPassword
                }]
              })(
                <Input type="password" placeholder={'请再次输入重置密码'} />
              )}
            </FormItem>

            
          </Form>
        </LoadComponent> */}
      </Modal>
    )
  }
}
function mapStateToProps(state) {
  // console.log(state)
  return {
    ...state.user
  };
}

export default connect(mapStateToProps)(Form.create()(NewAdd))
