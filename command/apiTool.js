// 发送接口请求
export const send = function send(thz, payload) {
    thz.props.dispatch({ type: 'fetch/send', payload })
}

// 对指定的model进行赋值
export const setValue = function setValue(thz,modelName,payload) {
    thz.props.dispatch({type:`${modelName}/setValue`,payload})
}

// 清除model列表
export const clearList = function (thz, payload) {
    payload.forEach((e) => {
        thz.props.dispatch({ type: `${e}/clear` })
    })
}

// 获取路由参数
export const getRouterParams = function(thz) {
    return thz.props.routerParams
}

// 获取vw尺寸
export const getSize = function(size ) {
    return size  / 19.2 + 'vw'
}

export default {
    send,
    setValue,
    clearList,
    getRouterParams,
    getSize
}