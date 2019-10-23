import React, { Component } from 'react'
import styles from './index.less'
import FormView from '../../components/FormView';

export default class Reg extends Component {

  constructor(props) {
      super(props);
      this.state = {
          setp:0,
          isShowSelectModal:false,
          typeData:[]
      }
      this.formData = this.getFormData()
  }

  getFormData = () => {
    return [
        this.getFormSetp1(),
        this.getFormSetp2()
    ]
  }

  getFormSetp2 = () => {
    return [
        {
            'name':'身份',
            'key':'a1',
            'type':'select',
            'rule':[
                {
                    'required':true
                }
            ],
            'typeData':[
                {
                    'name':'测试1',
                    'value':0
                },
                {
                    'name':'测试2',
                    'value': 1
                }
            ]
        },
        {
            'name':'姓名',
            'key': 'a2',
            'rule': [
                {
                    'required': true
                }
            ],
        },
        {
            'name':'联系手机',
            'key': 'a3',
            'rule': [
                {
                    'required': true
                }
            ]
        },
        {
            'name':'采购商品',
            'type':'select'
        },
        {
            'name':'采购量',
            'type':'inputLabel'
        },
        {
            'name':'性别',
            'type':'checkBox',
            'typeData':[
                {
                    'name':'男',
                    'value': 0
                },
                {
                    'name':'女',
                    'value':1
                }
            ]
        },
        {
            'name':'公司名称'
        }
    ]
  }

  getFormSetp1 = () =>{
    return [
        {
            'name':'手机号',
            'key':'mobile'
        },
        {
            'name':'验证码',
            'type':'code',
            'key':'code'
        }
    ]
  }

  renderSetp = () => {  
    return (
        <img 
            src={require(`../../images/Reg/setp${this.state.setp + 1}.png`)} 
            className={styles.setpImg}
        />
    )
  }

  setModalType = (typeData) => {
    this.setState({
        isShowSelectModal:true,
        typeData:typeData
    })
  }

  renderFormCard = () => {
    const form = this.formData[this.state.setp]
    return (
        <FormView
            data={form}
        />
    )
    // return (
    //     <div className={styles.formCard}>
    //         {form.map((e)=>{
    //             return this.renderLabel(e)(this.renderFormView(e))
    //         })}
    //     </div>
    // )
  }

  onNextDown = () => {
    this.setState({
        setp:1
    })
  }

  renderNextButton = () => {
    return (
        <div    
            onClick={this.onNextDown}
            className={styles.button}
        >
            下一步
        </div>
    )
  }

  renderConfirmReg = () => {
    return (
        <div
            onClick={this.onNextDown}
            className={styles.button}
        >
            确认注册
        </div>
    )
  }

  renderFoot = () => {
    const button = [this.renderNextButton,this.renderConfirmReg][this.state.setp]()
    return (
        <div className={styles.foot}>
            {button}
        </div>
    )
  }

  renderModal = () => {
    const {typeData} = this.state
    return (
        <div className={styles.modal}>
            {
                typeData.map((e,i)=>{
                    const isSelect = i
                    return (
                        <div className={styles.modalListItem}>

                        </div>
                    )
                })
            }
        </div>
    )
  }

  render() {
    return (
      <div className={styles.main}>
        {/* 显示步骤图片 */}
        {this.renderSetp()}
        {/* formm表单 */}
        {this.renderFormCard()}
        {/* 底部提交按钮 */}
        {this.renderFoot()}
      </div>
    )
  }
}
