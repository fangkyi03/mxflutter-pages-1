import React, { Component } from 'react'
import styles from './index.less'

export default class IconGroup extends Component {

    static defaultProps = {
        data: [
            {
                'name': '纳入监管'
            },
            {
                'name': '溯源'
            },
            {
                'name': "无公害"
            },
            {
                "name": '品控'
            },
            {
                'name': '食责险'
            }
        ]
    }

    getCardLabelColor = (name) => {
        switch (name) {
            case '纳入监管':
                return '#FF6D6D';
            case '溯源':
                return '#6D93FF';
            case '无公害':
                return '#11D488';
            case '品控':
                return '#B37DFE';
            case '食责险':
                return '#FF8400';
        }
    }
    renderCardLabel = (label) => {
        return (
            <div className={styles.cardLabel} style={{ background: this.getCardLabelColor(label) }}>
                {label}
            </div>
        )
    }
    renderCardLabelGroup = (item) => {
        const {data} = this.props
        return (
            <div className={styles.cardLabelGroup}>
                {
                    data.map((e) => {
                        return this.renderCardLabel(e.name)
                    })
                }
            </div>
        )
    }

    render() {
        return this.renderCardLabelGroup()
    }
}
