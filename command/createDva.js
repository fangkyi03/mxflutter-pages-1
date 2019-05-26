import React from 'react'
import api from './api'
import { Provider } from 'react-redux';
import dva, { connect } from 'dva-no-router';
import * as NetTools from './netTool';
import fetch from '../models/fetch';
import {message} from 'antd'

const checkServer = () => Object.prototype.toString.call(global.process) === '[object process]';

// eslint-disable-next-line
const __NEXT_DVA_STORE__ = '__NEXT_DVA_STORE__'

function createDvaStore(initialState) {
    let app;
    if (initialState) {
        app = dva({
            initialState,
        });
    } else {
        app = dva({});
    }
    app.model(
        fetch({
            netTool: NetTools,
            onGLNetStart: ({ retData }) => {
                if ((retData.code === 200) || retData.status === 0) {
                    return retData;
                }
                return false;
            },
            onGLNetError: ({ retData, url }) => {
                const errorText = '功能异常,请联系管理员';
                if (retData.error == "401" || retData.error == "invalid_token" || retData.status == 401) {
                    if (api.getRunState().indexOf('ztesa') == -1) {
                        app._store.dispatch(routerRedux.push({ pathname: "/login" }));
                    } else {
                        windows.location.href = 'http://ztesa.com.cn:7801'
                    }
                } else if (retData.code == 400 && retData.msg == '授权失败，禁止访问') {
                    app._store.dispatch(routerRedux.push({ pathname: "/403" }));
                } else if (retData.status == 403 || retData.code == 403) {
                    app._store.dispatch(routerRedux.push({ pathname: "/403" }));
                } else if (retData.status == 500 || retData.code == 500) {
                    //app._store.dispatch(routerRedux.push({ pathname: "/500" }));
                } else {
                    message.error(retData.msg || retData.message || errorText);
                }
            },
            onGLNetCatch: ({ error }) => {
                console.log('接口异常输出', error);
            },
        }),
    );
    // const isArray = Array.isArray(model);
    // if (isArray) {
    //     model.forEach((m) => {
    //         app.model(m);
    //     });
    // } else {
    //     app.model(model);
    // }
    app.router(() => { });
    app.start();
    // console.log(app);
    // eslint-disable-next-line
    const store = app._store
    return store;
}

function getOrCreateStore(initialState) {
    const isServer = checkServer();
    if (isServer) { // run in server
        // console.log('server');
        return createDvaStore(initialState);
    }
    // eslint-disable-next-line
    if (!window[__NEXT_DVA_STORE__]) {
        // console.log('client');
        // eslint-disable-next-line
        window[__NEXT_DVA_STORE__] = createDvaStore(initialState);
    }
    // eslint-disable-next-line
    return window[__NEXT_DVA_STORE__];
}


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
                // localStorage.setItem(this.getModalName(), JSON.stringify(location.state));
                return location.state
            }else {
                // return JSON.parse(localStorage.getItem(this.getModalName()));
            }
        }

        render() {
            const { Component, modelList, ...arg } = this.props
            return (
                <Component {...arg} modelList={modelList} routerData={this.getRouterInfo() || {}} />
            )
        }
    }

    return (Component) => {
        const ComponentWithDva = (props = {}) => {
            const { store, initialProps, initialState } = props;
            const ComponentView = connect((state) => {
                let obj = {}
                modelList.forEach((e) => {
                    obj = { ...obj, ...state[e] }
                })
                return { ...obj, Component, modelList }
            }, null, null, option)(DvaView)
            return React.createElement(
                Provider,
                // in client side, it will init store with the initial state tranfer from server side
                { store: store && store.dispatch ? store : getOrCreateStore(initialState) },
                // transfer next.js's props to the page
                React.createElement(ComponentView, initialProps),
            );
        };
        ComponentWithDva.getInitialProps = async (props = {}) => {
            // console.log('get......');
            const isServer = checkServer();
            const store = getOrCreateStore(props.req);
            // call children's getInitialProps
            // get initProps and transfer in to the page
            const initialProps = Component.getInitialProps
                ? await Component.getInitialProps({ ...props, isServer, store })
                : {};
            return {
                store,
                initialProps,
                initialState: store.getState(),
            };
        };
        return ComponentWithDva;
    }
}

export default createDva;