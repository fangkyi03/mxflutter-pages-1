import React, { Component } from 'react'
import FormContainer from '../FormContainer';
import SearchRest from '../SearchReset';
import { Col } from 'antd'
import formStore from '../../utils/formStore';

export default class FormHeader extends Component {

    constructor(props) {
        super(props);

        this.form = new FormContainer({
            modelName: props.modelName,
            formData: props.data, 
            colSize: {
                labelCol: 8,
                wrappCol: 14,
                cols: 5
            },
            ...props,
        })
        this.state = {
            isMore: false
        }
    }
    
    onMore = (state) => {
        this.setState({ isMore: state })
    }

    getModelName = () =>{
        return this.props.modelName
    }
    
    onReset = ()=>{
        const { onReset } = this.props
        formStore.resetForm(this.getModelName())
        onReset && onReset()
    }

    onSearch = ()=>{
        const { onSearch } = this.props
        formStore.sumbit(this.getModelName(),(data)=>{
            onSearch && onSearch(data)
        })
    }

    render() {
        const { isMore } = this.state
        const {data} = this.props
        return (
            this.form.getRow(
                [
                    this.form.getChildrenMap(isMore ? data : data.slice(0,4)),
                    <Col span={4}>
                        <SearchRest 
                            onMore={this.onMore} 
                            isMore={isMore}
                            isShowMore={data.length >= 5}    
                            onReset={this.onReset}
                            onSearch={this.onSearch}
                        />
                    </Col>
                ]
            )
        )
    }
}
