import React, { Component } from 'react'
import styles from './index.less'
import apiTool from '../../command/apiTool';
import FormSelect from '../../components/FormSelect';

export default class Reg extends Component {

  constructor(props) {
      super(props);
      this.state = {
          setp:1,
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
            'type':'select',
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
            'name':'姓名'
        },
        {
            'name':'联系手机'
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

  renderLabel = (item) => {
    return (Component)=> {
        return (
            <div className={styles.label}>
                <div style={{minWidth:apiTool.getSize(150),fontSize: apiTool.getSize(28), color:'#666666'}}>{item.name}</div>
                <div style={{display:'flex',flex:1}}>
                    {Component}
                </div>
            </div>
        )
    }
  }

  renderInput = (item) =>{ 
    return (
        <input placeholder={`请输入${item.name}`}/>
    )
  }

  renderCode = (item) => {
    return (
        <div className={styles.codeView}>
            {this.renderInput(item)}
            <div className={styles.normalCode}>
                获取验证码
            </div>
        </div>
    )
  }

  setModalType = (typeData) => {
    this.setState({
        isShowSelectModal:true,
        typeData:typeData
    })
  }

  renderSelect = (item) => {
    return <FormSelect data={item} />
  }

  renderCheckBox = (item) => {
    return (
        <div style={{display:'flex',alignItems:'center'}}>
            {
                item.typeData.map((e)=>{
                    return (
                        <div style={{display:"flex",alignItems:'center',marginRight:apiTool.getSize(150)}}> 
                            <img 
                                src={require('../../images/Class//selectCheck.png')}
                                style={{width:apiTool.getSize(32),height:apiTool.getSize(32)}}    
                            />
                            <div style={{ marginLeft:apiTool.getSize(20),fontSize: apiTool.getSize(26), color:'#333333'}}>{e.name}</div>
                        </div>
                    )
                })
            }
        </div>
    )
  }

  renderFormView = (item) => {
    switch (item.type) {
        case 'input':
            return  this.renderInput(item)
        case 'code':
            return this.renderCode(item)
        case 'select':
            return this.renderSelect(item)
        case 'checkBox':
            return this.renderCheckBox(item)
        default:
            return this.renderInput(item)
    }
  }

  renderFormCard = () => {
    const form = this.formData[this.state.setp]
    return (
        <div className={styles.formCard}>
            {form.map((e)=>{
                return this.renderLabel(e)(this.renderFormView(e))
            })}
        </div>
    )
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
