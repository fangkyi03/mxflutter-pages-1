
import { routerRedux } from 'dva/router';
import api from './api';

//获取url参数
api.getUrlParam = function(paraName) {  
  let url = window.location.toString();
  let arrObj = url.split("?");
　　　if (arrObj.length > 1) {
　　　　　　let arrPara = arrObj[1].split("&");
　　　　　　let arr;
　　　　　　for (let i = 0; i < arrPara.length; i++) {
　　　　　　　　arr = arrPara[i].split("=");
　　　　　　　　if (arr != null && arr[0] == paraName) {
　　　　　　　　　　return arr[1];
　　　　　　　　}
　　　　　　}
　　　　　　return "";
　　　　}
　　　　else {
　　　　　　return "";
　　　　}
}  

// 发送网络请求数据
api.send = function (thz, payload) {
  thz.props.dispatch({ type: 'fetch/send', payload });
};

// 显示弹出层
api.showModal = function (thz, modelName,params) {
  const obj = {}
  Object.keys(params.dataSource || {}).forEach(e => {
    obj[e] = {
      value: params.dataSource[e]
    };
  });
  thz.props.dispatch({
    type: `${modelName}/setValue`,
    payload: {
      isShowModal: true,
      ...params,
      dataSource: params.dataSource || {},
      newDataSource: obj || {}
    }
  });
};

// 隐藏弹出层
api.closeModal = function (thz, modelName) {
  thz.props.dispatch({
    type: `${modelName}/setValue`,
    payload: {
      isShowModal: false,
    },
  });
};

// 赋值
api.setValue = function (thz, modalName, dataSource) {
  // console.log('输出setValue',thz)
  thz.props.dispatch({ type: `${modalName}/setValue`, payload: dataSource });
};

// 跳转路由
api.jumpRouter = function (thz, pathname, state) {
  thz.props.dispatch(routerRedux.push({ pathname, state }));
};

// 清空model列表
api.clearList = function (thz, payload) {
  payload.forEach((e) => {
    thz.props.dispatch({ type: `${e}/clear` });
  });
};

// 返回路由
api.backRouter = function (thz) {
  thz.props.dispatch(routerRedux.goBack());
};

// 效验并且提交表单
api.sumbitForm = function (thz, modelName, callBack, onError) {
  thz.props.dispatch({ type: 'Form/sumbitForm', payload: { name: modelName, callBack, onError } });
};

// 效验表单
api.validateFields = function (thz, modelName, callBack) {
  thz.props.dispatch({ type: 'Form/validateFields', payload: { name: modelName, callBack } });
};

// 修改form表单数据
api.setFormValue = function (thz, modelName, payload) {
  thz.props.dispatch({ type:`Form/setFormValue`,payload,modelName})
};

// 设置表单禁用组件
api.setFormDisable = function (thz, modelName, payload) {
  thz.props.dispatch({ type: `${modelName}/setValue`, payload: { disable: payload } });
};

// 设置组件是否强制
api.setFormRequired = function (thz, name, data) {
  thz.props.dispatch({ type: 'Form/setFormRequired', payload: { data, name } });
};

// 数据转换
api.tranDataSource = function (payload) {
  const obj = {};
  Object.keys(payload).forEach((e) => {
    obj[e] = {
      value: payload[e],
    };
  });
  return { newDataSource: obj, dataSource: payload };
};

// 禁用并清空数据
api.setDisableClear = function (thz, modelName, key, value) {
  thz.props.dispatch({ type: 'Form/setDisableClear', payload: { name: modelName, key, value } });
};

// 取消禁用
api.cancelDisabel = function (thz, modelName, key) {
  thz.props.dispatch({ type: 'Form/cancelDisabel', payload: { name: modelName, key } });
};

// 获取当前运行状态
api.getRunState = function(){
  const locathost = window.location.host
  if (locathost.indexOf('locathost') !== -1){
    return 'nongqibang.com'
  }else {
    return locathost
  }
}

var timer = null;
var params = null
api.debounce = function(func, delay) {
  return (...args) => {
    params = args
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, params);
        clearTimeout(timer);
        timer = null
      }, delay);
    }
  };
};

var submitFlag = false
// 单次延时提交
api.singleSubmit = function(func) {
  return (...args) => {
    params = args
    if(!submitFlag){
      func.apply(this, params);
      submitFlag = true;
    }
  }
}

let lastTime = 0
api.throttle = function(func,wait) {
  return (...args) => {
      params = args
      let nowTime = new Date().getTime()
      if(nowTime - lastTime > wait){
        func.apply(this,params);
        lastTime = nowTime;
      }
  }
}

// 身份证号码验证
api.checkIdNumber = function(rule, value, callback) {
  //验证中文名是否重名
  //号码规则校验
  // if(value&&value.length==17){
    const format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/;
    if (!format.test(value)) {
      callback('请输入正确身份证编码')
      return false;
    }   
    //区位码校验      
    //出生年月日校验   前正则限制起始年份为1900;   
    var year = value.substr(6, 4),
    //身份证年       
    month = value.substr(10, 2),
    //身份证月      
    date = value.substr(12, 2),
    //身份证日     
    time = Date.parse(month + '-' + date + '-' + year),//身份证日期时间戳date
    now_time = Date.parse(new Date()),//当前时间戳     
    dates = (new Date(year, month, 0)).getDate();//身份证当月天数
    
    if (time > now_time || date > dates) {
      callback('身份证日期校验错误')
      return false;
    }
        
    //校验码判断
          
    var c = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];   
    //系数     
    var b = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];  
    //校验码对照表     
    var id_array = value.split("");  
    var sum = 0;   
    for (var k = 0; k < 17; k++) {   
      sum += parseInt(id_array[k]) * parseInt(c[k]);      
    }
    let bloon = id_array[17].toUpperCase() === b[sum % 11].toUpperCase();      
    bloon? callback():callback('身份证格式错误')
    return bloon;
  // }else if(value&&value.length==15){
  //   // return callback(15)
  //   const format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}((\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{2}[0-9]$/;
  //   if (!format.test(value)) {
  //     callback('请输入正确身份证编码')
  //     return false;
  //   }   
  //   //区位码校验      
  //   //出生年月日校验   前正则限制起始年份为1900;   
  //   var year = value.substr(6, 2),
  //   //身份证年       
  //   month = value.substr(8, 2),
  //   //身份证月      
  //   date = value.substr(10, 2),
  //   //身份证日     
  //   time = Date.parse(month + '-' + date + '-' + year),//身份证日期时间戳date
  //   now_time = Date.parse(new Date()),//当前时间戳     
  //   dates = (new Date(year, month, 0)).getDate();//身份证当月天数
    
  //   if (time > now_time || date > dates) {
  //     callback('身份证日期校验错误')
  //     return false;
  //   }
        
  //    callback()
  //   return bloon;
  // }else{
  //  return callback('身份证格式错误')
  // }
  
    
}


api.getDataSource = (thz,modelName,callBack) =>{
  thz.props.dispatch({ type: 'Form/getDataSource', modelName, callBack})
}

api.getListPage = (params = {},current = 0,size = 10) =>{
  return {
    current, size, condition: params
  }
}

//获取问号后面值
api.GetRequest = () => {
  let url = window.location.hash; //获取url中"?"符后的字串
  let theRequest = {};
  if (url.indexOf("?") !== -1) {
    let strs = []
    strs = url.split("?").slice(1).join().split("&")
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}