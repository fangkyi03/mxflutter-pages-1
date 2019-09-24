import React, { Component } from 'react'
import { TreeSelect } from 'antd';

export default class FormTreeSelect extends Component {

  render() {
    const {typeData,value,data,onChange, disable} = this.props
    return (
        <TreeSelect
            disabled={disable}
            placeholder={'请选择' + data.name}
            treeDefaultExpandAll={true}
            treeData={typeData}
            value={value}
            onChange={onChange}
            style={{width:'100%'}}
            multiple={true}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        />
    )
  }
}
