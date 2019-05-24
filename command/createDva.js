import { connect } from 'react-redux'
import React from 'react'
import api from './api'

function createDva(modelList, { option = {} } = {}) {
    class DvaView extends React.Component {

        static defaultProps = {
            isDestroy: true
        }

        constructor(props) {
            super(props);
            this.ComponentS = this.props.Component
        }

        componentWillUnmount() {
            if (this.props.isDestroy) {
                api.clearList(this, this.props.modelList)
            }
        }
        
        getModalName = () =>{
            return this.props.modelList[0]
        }

        getRouterInfo = () =>{
            const {location = {}} = this.props
            if (location.state) {
                localStorage.setItem(this.getModalName(), JSON.stringify(location.state));
                return location.state
            }else {
                return JSON.parse(localStorage.getItem(this.getModalName()));
            }
        }

        render() {
            const { Component, modelList, ...arg } = this.props
            return <Component {...arg} modelList={modelList} routerData={this.getRouterInfo() || {}}/>
        }
    }

    return (Component) => {
        return connect((state) => {
            let obj = {}
            modelList.forEach((e) => {
                obj = { ...obj, ...state[e] }
            })
            return { ...obj, Component, modelList }
        }, null, null, option)(DvaView)
    }
}

export default createDva;