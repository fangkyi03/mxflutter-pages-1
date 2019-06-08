export const send = function send(thz, payload) {
    thz.props.dispatch({ type: 'fetch/send', payload })
}

export const setValue = function setValue(thz,modelName,payload) {
    thz.props.dispatch({type:`${modelName}/setValue`,payload})
}

export default {
    send,
    setValue
}