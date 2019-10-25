import React, { Component } from 'react'
import FormView from '../../components/FormView';
import HeaderTitle from '../../components/HeaderTitle';
import styles from './index.less'
import apiTool from '../../command/apiTool';

export default class PurchaseOrder extends Component {

    constructor(props) {
        super(props);
        this.form = this.getFormData()
    }

    componentDidMount() {
      apiTool.updateTitle('123123123123')
    }
    
    getFormData = () => {
        return [
            {
                'name': '姓名',
                'key': 'a1',
                'type': 'input'
            },
            {
                'name': '联系电话',
                'key': 'a2',
                'type': 'input'
            },
            {
                'name': '品种',
                'key': 'a3',
                'type': 'input'
            },
            {
                'name': '需求量',
                'type': 'input',
                'key': 'a4'
            },
            {
                'name': '配送地址',
                'key': 'a5',
                'type': 'input'
            },
            {
                'name': '具体描述',
                'key': 'a6',
                'type': 'area'
            },
            {
                'name':'验证码',
                'type':'verificationCode'
            }
        ]
    }

    renderFoot = () => {
        return (
            <div className={styles.footsuccess}>
                提交
            </div>
        )
    }

    render() {
        return (
            <div style={{paddingLeft:apiTool.getSize(20),paddingRight:apiTool.getSize(20),paddingBottom:apiTool.getSize(100)}}>
                <HeaderTitle title={'提交采购需求'}/>
                <FormView data={this.form} style={{marginTop:0}}/>
                {this.renderFoot()}
            </div>
        )
    }
}
