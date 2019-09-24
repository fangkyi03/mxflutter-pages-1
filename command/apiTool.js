import Router from 'next/router'
import cookie from "react-cookies";

// 发送接口请求
export const send = function send(thz, payload) {
    thz.props.dispatch({ type: 'fetch/send', payload })
}

// 获取model数据
export const getValue = function getValue(thz, modelName) {
    return thz.props.dispatch({ type: `${modelName}/getValue`, payload: { modelName } })
}

// 对指定的model进行赋值
export const setValue = function setValue(thz, modelName, payload) {
    thz.props.dispatch({ type: `${modelName}/setValue`, payload })
}

// 清除model列表
export const clearList = function (thz, payload) {
    payload.forEach((e) => {
        thz.props.dispatch({ type: `${e}/clear` })
    })
}

// 获取路由参数
export const getRouterParams = function (thz) {
    return thz.props.routerParams
}

// 获取vw尺寸
export const getSize = function (size) {
    return size / 19.2 + 'vw'
}

// 格式化路由参数
export const createRouterParams = function (params = {}) {
    console.log('输出结果', params);
    let text = ''
    Object.keys(params).forEach((e) => {
        text += e + '=' + params[e] + '&';
    })
    return text;
}

// 路由跳转
export const jumpRouter = function (router, routerParams) {
    // 路由首字母转为小写
    const routerText = router.replace('/', '').trim()
    router = routerText[0].toLowerCase() + routerText.slice(1);
    Router.push('/' + router + '?' + createRouterParams(routerParams))
}

// 返回路由
export const backRouter = function () {
    Router.back()
}

// 控制弹出层modal是否显示
export const toggleModal = function (thz, modelName, isShow = true, params) {
    thz.props.dispatch({
        type: `${modelName}/setValue`, payload: {
            isShowModal: isShow,
            isEdit: false,
            ...params
        }
    })
}

// 打开编辑模式
export const openEditModal = function (thz, modelName, isEdit = true, params) {
    thz.props.dispatch({
        type: `${modelName}/setValue`, payload: {
            isShowModal: true,
            isEdit,
            ...params
        }
    })
}

// 清空对应表单model数据
export const clearForm = function (thz, modelName) {
    thz.props.dispatch({ type: 'form/clearForm', payload: { modelName } })
}

// 设置表单隐藏
export const setFormNotDisplay = function (thz, modelName, notDisplay, isShow = false) {
    thz.props.dispatch({
        type: 'form/setFormNotDisplay', payload: {
            modelName,
            notDisplay,
            isShow
        }
    })
}

// 设置当前表单只显示部分
export const setFormOnlyDisplay = function (thz, modelName, display = [], isShow = true) {
    console.log('表单输出', modelName, display)
    thz.props.dispatch({
        type: 'form/setFormOnlyDisplay', payload: {
            modelName,
            display,
            isShow
        }
    })
}

// 设置表单数据
export const setFormValue = function (thz, modelName, data) {
    thz.props.dispatch({
        type: 'form/setFormValue', payload: {
            modelName,
            dataSource: data
        }
    })
}

// 返回表单数据
export const getFormValue = function (thz, modelName, key) {
    return thz.props.dispatch({
        type: 'form/getFormValue', payload: {
            modelName,
            key
        }
    })
}

// 提交表单
export const sumbitForm = function (thz, modelName, callBack) {
    thz.props.dispatch({ type: 'form/sumbitForm', payload: { modelName, callBack } })
}

// 重置表单
export const resetForm = function (thz, modelName) {
    thz.props.dispatch({ type: 'form/resetForm', payload: { modelName } })
}

// 获取路由参数
export const getRouter = function (thz) {
    return thz.props.router
}

/**
* 自动转换分页接口数据
*/
const createListData = function createListData(inData = { records: [] }, data = { records: [] }) {
    return { data: { ...inData, ...data, records: inData.records.concat(((data.records ? data : { records: [] })).records) } }
}

/**
* 自动构建分页列表接口
*/
const createListPage = function createListPage(params = {}, current = 1, size = 10) {
    return {
        current, size, condition: params
    }
}

// 判断当前环境 测试环境 本地开发环境 线上环境
export const isDev = function () {
    const hostname = window.location.hostname
    const isIp = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.test(hostname)
    if (isIp) {
        return hostname
    } else {
        return '*.' + hostname
    }
}

// 获取图片信息
export const getImageData = function (data) {
    const uid = Math.random() * 1000
    const name = data.split('/').slice(-1)[0]
    return {
        uid,
        name,
        url: data
    }
}

// 创建图片的结构
export const createImageStructure = function (data) {
    return {
        uid: data.uid,
        name: data.name,
        url: data.url,
        response: {
            uid: data.uid,
            name: data.name,
            status: "done",
            url: data.url,
        }
    }
}

// 禁用表单所有组件
export const disableForm = function (thz, modelName, disable = [], isDisable = true) {
    thz.props.dispatch({ type: 'form/disableForm', payload: { modelName, disable, isDisable } })
}

// 创建表单图片格式
export const createImage = function (img) {
    const imgSplit = img.split(',')
    if (imgSplit.length > 1) {
        return imgSplit.map((e) => {
            return createImageStructure(getImageData(e))
        })
    } else {
        return [
            createImageStructure(getImageData(img))
        ]
    }
}

// 跳转登录
export const jumpLogin = function () {
    jumpRouter('login')
}

// 设置表单type
export const setFormType = function (thz, modelName, typeData) {
    thz.props.dispatch({ type: 'form/setFormType', payload: { modelName, typeData } })
}

export const postRequest = (url, params = {}) =>
    new Promise(resolve => {
        fetch(url, {
            credentials: "include",
            method: "POST",
            body: JSON.stringify(params),
            headers: {
                "Content-Type": "application/json",
                Authorization: `${cookie.load("tokenType")} ${cookie.load("token")}`,
                "X-Application-name": "app"
            }
        })
            .then(e => e.json())
            .then(e => {
                resolve(e);
            })
            .catch(e => {
                resolve(e);
            });
    });

export const getRequest = (url) =>
    new Promise(resolve => {
        fetch(url, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${cookie.load("tokenType")} ${cookie.load("token")}`,
                "X-Application-name": "app"
            }
        })
            .then(e => e.json())
            .then(e => {
                resolve(e);
            })
            .catch(e => {
                resolve(e);
            });
    });

// 获取表单类型数据
export const getFormType = (thz, name) => {
    return thz.props.dispatch({ type: 'form/getFormType', payload: { modelName: name } })
}

export default {
    send,
    setValue,
    clearList,
    getRouterParams,
    getSize,
    toggleModal,
    openEditModal,
    clearForm,
    setFormNotDisplay,
    setFormValue,
    sumbitForm,
    resetForm,
    getFormValue,
    jumpRouter,
    isDev,
    getRouter,
    createListData,
    createListPage,
    createImage,
    disableForm,
    getValue,
    jumpLogin,
    createRouterParams,
    setFormType,
    postRequest,
    getRequest,
    backRouter,
    setFormOnlyDisplay,
    getFormType
}