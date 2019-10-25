import Router from 'next/router'

// 发送接口请求
export const send = function send(thz, payload) {
    thz.props.dispatch({ type: 'fetch/send', payload })
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

// 获取分享路径
export const getSharePath = function (thz) {
    const router = thz.props.router
    const routerName = router.route.replace('/', '');
    const params = router.asPath.split('?')[1] || ''
    return `/pages/otherView/index?viewName=${routerName}&${params}`
}

// 获取路由参数
export const getRouterParams = function (thz) {
    const { scene } = thz.props.routerParams
    if (scene) {
        return tranRouterParamObj(decodeURIComponent(scene))
    } else {
        return thz.props.routerParams
    }
}

// 获取vw尺寸
export const getSize = function (size) {
    return size / 7.5 + 'vw'
}

// 判断是否是小程序
export const getIsWxClient = function ({ success, fail }) {
    let ua = navigator.userAgent.toLocaleLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        wx.miniProgram.getEnv((res) => {
            if (res.miniprogram) {
                success && success()
            } else {
                fail && fail()
            }
        })
    } else {
        fail && fail()
    }
}

// 构造路由跳转
export const createRouterParams = function (params = {}) {
    console.log('输出结果', params);
    let text = ''
    Object.keys(params).forEach((e) => {
        text += e + '=' + params[e] + '&';
    })
    return text;
}

// 跳转页面
export const jumpRouter = function (routerName, routerParams) {
    const token = localStorage.getItem('userIdNew')
    Router.push('/' + routerName + '?' + createRouterParams(routerParams))
    // getIsWxClient({
    //     success: () => {
    //         wx.miniProgram.navigateTo({ url: `../../pages/otherView/index?viewName=${routerName}&` + createRouterParams(routerParams) + '&token=' + token })
    //     },
    //     fail: () => {
    //         Router.push('/' + routerName + '?' + createRouterParams(routerParams))
    //     }
    // })
}

// 跳转小程序原生页面
export const jumpNativeRouter = function (routerName, routerParams) {
    const token = localStorage.getItem('userIdNew')
    getIsWxClient({
        success: () => {
            wx.miniProgram.navigateTo({ url: `../../pages/${routerName}/index?` + createRouterParams(routerParams) + '&token=' + token })
        },
        fail: () => {
            Router.push('/' + routerName + '?' + createRouterParams(routerParams))
        }
    })
}

// 跳转到登录页面
export const jumpLogin = function () {
    getIsWxClient({
        success: () => {
            wx.miniProgram.navigateTo({ url: `../../pages/login/index` })
        },
        fail: () => {
            Router.push('/login')
        }
    })
}

// 跳转到首页
export const jumpHome = function () {
    getIsWxClient({
        success: () => {
            wx.miniProgram.reLaunch({ url: `../../pages/otherView/index?viewName=commonIndex` })
        },
        fail: () => {
            Router.push('/commonIndex')
        }
    })
}

// 跳转到首页
export const jumpGuanHome = function (pavId) {
    getIsWxClient({
        success: () => {
            wx.miniProgram.reLaunch({ url: `../../pages/otherView/index?viewName=index&pavId=${pavId ? pavId : ''}` })
        },
        fail: () => {
            Router.push('/index')
        }
    })
}


// 给webview发送消息
export const postMessage = function (params) {
    getIsWxClient({
        success: () => {
            wx.miniProgram.postMessage({ data: params })
        },
        fail: () => {
        }
    })
}

// 返回路由
export const backRouter = function () {
    getIsWxClient({
        success: () => {
            wx.miniProgram.navigateBack()
        },
        fail: () => {
        }
    })
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

// 一开始没有延迟的防抖
const debounce = (func, wait = 500, immediate = true) => {
    let timer, context, args;

    // 延迟执行函数
    const later = () =>
        setTimeout(() => {
            timer = null;
            if (!immediate) {
                func.apply(context, args);
                context = args = null;
            }
        }, wait);


    // 这里返回的函数是每次实际调用的函数
    return function (...params) {
        // 如果没有创建延迟执行函数（later），就创建一个
        if (!timer) {
            timer = later();
            if (immediate) {
                func.apply(this, params);
            } else {
                context = this;
                args = params;
            }
        } else {
            clearTimeout(timer);
            timer = later();
        }
    };
}

// 转换短文本
export const getDuanText = (text, len = 10) => {
    return text.length > len ? text.slice(0, len) + '...' : text;
}

// 跳转到tab
export const jumpTab = function jumpTab(name) {
    getIsWxClient({
        success: () => {
            wx.miniProgram.switchTab({ url: `/pages/${name}/index` })
        },
        fail: () => {
            Router.replace('/' + name)
        }
    })
}

// 创建临时数据缓存
const createTemp = function (data) {
    postMessage({ type: 'temp', data })
}

// 更新标题
const updateTitle = function (title) {
    // document.querySelectorAll('title')[0].childNodes[0].data = '1'
    document.title = title
}

const injectUnount = function (target) {
    // 改装componentWillUnmount，销毁的时候记录一下
    let next = target.prototype.componentWillUnmount
    target.prototype.componentWillUnmount = function () {
        if (next) next.call(this, ...arguments);
        this.unmount = true
    }
    // 对setState的改装，setState查看目前是否已经销毁
    let setState = target.prototype.setState
    target.prototype.setState = function () {
        if (this.unmount) return;
        setState.call(this, ...arguments)
    }
}

// 将字符串路由转换成对象
export const tranRouterParamObj = function (str) {
    const obj = {}
    str.split('&').forEach((e) => {
        const splitStr = e.split('=')
        obj[splitStr[0]] = splitStr[1]
    })
    return obj
}

export const isAndroid = () => {
    const u = navigator.userAgent;
    if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
        if (window.ShowFitness !== undefined) return true;
    }
    return false;
}
// 判断设备为 ios
export const isIos = () => {
    const u = navigator.userAgent;
    if (u.indexOf("iPhone") > -1 || u.indexOf("iOS") > -1) {
        return true;
    }
    return false;
}


export default {
    send,
    setValue,
    clearList,
    getRouterParams,
    getSize,
    jumpRouter,
    getIsWxClient,
    postMessage,
    jumpLogin,
    jumpNativeRouter,
    backRouter,
    createListData,
    createListPage,
    debounce,
    getDuanText,
    jumpTab,
    getSharePath,
    createTemp,
    updateTitle,
    jumpHome,
    jumpGuanHome,
    injectUnount,
    tranRouterParamObj,
    isAndroid,
    isIos
}