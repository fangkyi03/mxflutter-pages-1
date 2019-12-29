import React from 'react'
import api from './api'
import { Provider } from 'react-redux';
import dva, { connect } from 'dva-no-router';
import * as NetTools from './netTool';
import fetch from '../models/fetch';
import apiTool from './apiTool';
import form from '../models/form';
// import * as mockTool from '../mockjs'
// import {message} from 'antd'

const checkServer = () => Object.prototype.toString.call(global.process) === '[object process]';

var app = null
// eslint-disable-next-line
const __NEXT_DVA_STORE__ = '__NEXT_DVA_STORE__'

const regModel = (modelList) => {
    modelList.forEach((e) => {
        if (app && app._models && app._models.findIndex((el) => el.namespace == e) == -1) {
            app.model({
                namespace: e,
                state: {
                    isShow: true,
                },
                reducers: {
                    setValue(state, { payload }) {
                        return { ...state, ...payload }
                    },
                    clear(state, { payload }) {
                        return { isShow: true }
                    }
                },
                effects: {
                    *getValue({ payload }, { select }) {
                        const { modelName } = payload
                        return yield select((state) => state[modelName]) || {}
                    }
                },
                subscriptions: {},
            })
        }
    })
}

function createDvaStore(initialState, modelList) {
    if (initialState) {
        app = dva({
            initialState,
        });
        regModel(modelList)
    } else {
        app = dva({});
        regModel(modelList)
    }
    if (app && app._models && app._models.findIndex((el) => el.namespace == 'fetch') == -1) {
        app.model(form)
        app.model(
            fetch({
                netTool: NetTools,
                // mockTool,
                onGLNetStart: ({ retData }) => {
                    if ((retData.code == 200 && retData.data !== null) || retData.status === 0) {
                        return retData;
                    }
                    return false;
                },
                onGLNetError: ({ retData, url }) => {
                    if (retData.error == 'error' || retData.error == 'unauthorized' || retData.status == '401' || retData.status == 401) {
                        console.log('输出登录')
                        apiTool.jumpLogin();
                    }
                    // message.error(retData.msg || retData.message );
                },
                onGLNetCatch: ({ error }) => {
                    console.log('接口异常输出', error);
                },
            }),
        );
    }
    app.router(() => { });
    app.start();
    return app;
}

function getOrCreateStore(initialState, modelList) {
    if (!app) {
        return createDvaStore(initialState, modelList)._store
    } else {
        regModel(modelList)
        return app._store
    }
}


function createDva(modelList, { option = {} } = {}) {
    class DvaView extends React.Component {

        static defaultProps = {
            isDestroy: true
        }

        componentWillUnmount() {
            if (this.props.isDestroy) {
                // apiTool.clearList(this, this.props.modelList)
                if (this.props.modelList.length > 0) {
                    apiTool.clearForm(this, this.props.modelList[0])
                }
            }
        }

        getModalName = () => {
            return this.props.modelList[0]
        }

        render() {
            const { NewComponent, modelList, ...arg } = this.props
            return (
                <NewComponent {...arg} modelList={modelList} />
            )
        }
    }

    return (Component) => {
        const ComponentWithDva = (props = {}) => {
            const { store, initialProps, initialState, ...arg } = props;
            const ComponentView = connect((state) => {
                let obj = {}
                modelList.forEach((e) => {
                    obj = { ...obj, ...state[e] }
                })
                return { ...obj, modelList }
            }, null, null, option)((props) => <DvaView NewComponent={Component} {...props} />)
            return React.createElement(
                Provider,
                { store: getOrCreateStore(initialState, modelList) },
                React.createElement(ComponentView, { ...initialProps, ...arg }),
            );
        };

        return ComponentWithDva;
    }
}

export default createDva;