import React, { Component } from 'react'
import { Col, Row } from 'antd';

export default class FormGridContainerRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
    }

    setShow = (isShow) => {
        this.setState({ isShow })
    }

    render() {
        const { span, renderLabel, labelCols,wrappCol} = this.props
        const { isShow} = this.state
        if (!isShow) return null
        return (
            <Col span={span}>
                <Row>
                    {renderLabel}
                    <Col span={wrappCol}>
                        <Row gutter={5}>
                            {this.props.children}
                        </Row>
                    </Col>
                </Row>
            </Col>
        )
    }
}
