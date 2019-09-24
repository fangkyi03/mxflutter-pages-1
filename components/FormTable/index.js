import React, { Component } from 'react'
// import styles from './index.less'
import { Table } from 'antd';
import apiTool from '../../command/apiTool';
import ButtonGroup from '../ButtonGroup';

export default class FormTable extends Component {

  static defaultProps = {
    buttonData: []
  }

  tranColumns = (columns) => {
    return columns.map((e) => {
      return {
        align: 'center',
        ...e
      }
    })
  }

  renderTable = (columns, dataSource) => {
    const { buttonData, pageData = { current: 1, total: 10, size: 10 }, onPage } = this.props
    let obj = {}
    if (Array.isArray(dataSource)) {
      obj = { records: dataSource, ...pageData}
    }else {
      obj = dataSource
    }
    return (
      <Table
        dataSource={obj.records}
        columns={this.tranColumns(columns)}
        size={'small'}
        bordered={true}
        style={{ marginTop: buttonData && buttonData.length > 0 ? apiTool.getSize(10) : 0, minHeight: apiTool.getSize(500) }}
        pagination={{
          ...obj,
          pageSize: obj.size,
          onChange: onPage
        }}
        // {...arg}
      />
    )
  }

  render() {
    const { buttonData = [], columns = [], dataSource = [] } = this.props
    return (
      <div>
        {/* 头部按钮 */}
        {buttonData && buttonData.length > 0 && <ButtonGroup data={buttonData} />}
        {/* 表格组件 */}
        {this.renderTable(columns, dataSource)}
      </div>
    )
  }
}
