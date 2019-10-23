import React, { Component } from 'react'
import styles from './index.less'
import apiTool from '../../command/apiTool'
import FormCode from '../FormCode'
import FormSelect from '../FormSelect'
import FormInputLabel from '../FormInputLabel'
import FormArea from '../FormArea'

export default class FormView extends Component {

  renderSelect = (item) => {
    return <FormSelect data={item} />
  }

  renderInput = (item) => {
    return (
      <input placeholder={`请输入${item.name}`} />
    )
  }

  // 是否有强制
  isHaveRequired = (item) => {
    if (item.rule) {
      return item.rule.some((e)=>e.required) 
    }else {
      return false
    }
  }

  renderLabel = (item) => {
    return (Component) => {
      return (
        <div className={styles.label}>
          <div style={{display:'flex',alignItems:'center',minWidth:apiTool.getSize(150)}}>
            <div style={{ fontSize: apiTool.getSize(28), color: '#666666' }}>{item.name}</div>
            {this.isHaveRequired(item) && <div style={{ color:'#FF3E18',fontSize:apiTool.getSize(28)}}>*</div>}
          </div>
          <div style={{ display: 'flex', flex: 1 }}>
            {Component}
          </div>
        </div>
      )
    }
  }

  renderCheckBox = (item) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {
          item.typeData.map((e) => {
            return (
              <div style={{ display: "flex", alignItems: 'center', marginRight: apiTool.getSize(150) }}>
                <img
                  src={require('../../images/Class//selectCheck.png')}
                  style={{ width: apiTool.getSize(32), height: apiTool.getSize(32) }}
                />
                <div style={{ marginLeft: apiTool.getSize(20), fontSize: apiTool.getSize(26), color: '#333333' }}>{e.name}</div>
              </div>
            )
          })
        }
      </div>
    )
  }

  renderCode = (item) => {
    return <FormCode data={item}/>
  }

  renderInputLabel = (item) =>  {
    return <FormInputLabel data={item} />
  }

  renderArea = (item) => {
    return <FormArea data={item}/>
  }

  renderFormView = (item) => {
    switch (item.type) {
      case 'input':
        return this.renderInput(item)
      case 'code':
        return this.renderCode(item)
      case 'select':
        return this.renderSelect(item)
      case 'checkBox':
        return this.renderCheckBox(item)
      case 'inputLabel':
        return this.renderInputLabel(item)
      case 'area':
        return this.renderArea(item)
      default:
        return this.renderInput(item)
    }
  }

  render() {
    const {data} = this.props
    return (
      <div className={styles.formCard}>
        {data.map((e)=>{
            return this.renderLabel(e)(this.renderFormView(e))
        })}
      </div>
    )
  }
}
