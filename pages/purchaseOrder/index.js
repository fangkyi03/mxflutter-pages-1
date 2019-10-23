import React, { Component } from 'react'
import FormView from '../../components/FormView';

export default class PurchaseOrder extends Component {

    constructor(props) {
        super(props);
        this.form = this.getFormData()
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
            }
        ]
    }

    render() {
        return (
            <div>
                <FormView data={this.form}/>
            </div>
        )
    }
}
