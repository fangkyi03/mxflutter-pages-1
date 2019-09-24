import React, { Component } from 'react'
import styles from './index.less'
import { Button } from 'antd';
import apiTool from '../../command/apiTool';

export default class ButtonGroup extends Component {

    renderButtonGroup = (data) => {
        return (
            <div className={styles.buttonGroup}>
                {
                    data.map((e, i) => {
                        return (
                            <Button
                                key={i}
                                type={e.buttonType}
                                disable={e.disable}
                                onClick={() => e.onClick && e.onClick()}
                                style={{ marginRight: apiTool.getSize(10) }}
                            >
                                {e.name}
                            </Button>
                        )
                    })
                }
            </div>
        )
    }

    render() {
        const {data} = this.props
        return (
            <div className={styles.buttonGroup}>
                {this.renderButtonGroup(data)}
            </div>
        )
    }
}
