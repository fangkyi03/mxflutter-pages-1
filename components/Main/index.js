import React, { Component } from 'react'
import { Layout } from 'antd'
import LeftMenu from '../LeftMenu'
import Content from '../Content'
import Header from '../Header'

export default class Main extends Component {
    render() {
        return (
            <Layout>
                <Header/>
                <Layout>
                    <LeftMenu/>
                    <Content></Content>
                </Layout>
            </Layout>
        )
    }
}
