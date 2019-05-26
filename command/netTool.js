// export const HOST_URL = 'http://192.167.5.180:8882';//'http://192.167.5.139:8002/'
import cookie from 'react-cookies';
import { domain } from "./env"
// let { hostname } = window.location;

// hostname = ['ztesa.com.cn', 'nongqibang.com'].indexOf(hostname) !== -1 ? 'base' : hostname.split('.')[0];

export const POST = (host, url, params = {}, appName = "supe") => new Promise(resolve => {
  fetch(host + url, {
    credentials: "include",
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
      Authorization: `${cookie.load(
        "tokenType"
      )} ${cookie.load("token")}`,
      "X-Application-name":'supe'
      // 'X-Application-name': process.env.NODE_ENV === 'development' ? 'supe' : 'supe',
      //'X-Application-name':'supe',
    }
  })
    .then(e => e.json())
    .then(e => {
      resolve(e);
    })
    .catch(e => {
      resolve(e);
    });
  }
);

export const Login = (host,url, params = {}, token) =>
  new Promise((resolve, reject) => {
    const paramsArray = [];
    let fullUrl = url; // 拼接url
    if (params) {
      // 拼接参数
      Object.keys(params).forEach(key =>
        paramsArray.push(`${key}=${params[key]}`)
      );
      if (fullUrl.search(/\?/) === -1) {
        fullUrl += `?${paramsArray.join("&")}`;
      } else {
        fullUrl += `&${paramsArray.join("&")}`;
      }
    }
    fetch(host + fullUrl, {
      credentials: "include",
      headers: {
        "X-Application-name": "base",
        "Content-Type": "application/json;",
        Authorization: `Basic enRlc2E6enRlc2E=`
      },
      method: "POST"
    })
      .then(e => e.json())
      .then(e => {
        // 如果有value说明正常获取了token
        if (e.value) {
          cookie.save('tokenType', e.tokenType, { domain: domain })
          cookie.save('token', e.value, { domain: domain })
          resolve({ code: 200, data: e.value });
        } else {
          resolve({ code: 400, msg: e.message || e.msg });
        }
      })
      .catch(e => {
        reject(e);
      });
  });

export const GET = (url, params = {}) => new Promise((resolve) => {
  fetch(`/api${params}`, {
    method: 'GET',
    headers: {
      mode: 'no-cors',
      'Content-Type': 'application/json',
      Authorization: `${cookie.load('tokenType')} ${cookie.load('token')}`,
      'X-Application-name': 'supe',
    },
  })
    .then(e => e.json())
    .then((e) => {
      resolve(e);
    })
    .catch((e) => {
      resolve(e);
    });
});

export const getMap = (url, params) => new Promise((resolve, reject) => {
  fetch(params, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST',
      mode: 'no-cors',
      'Content-Type': 'application/json',
    },
  })
    .then(e => e.json())
    .then((e) => {
      console.log('object');
    });
});

export const LoginMobile = (host,url,params = {}) => new Promise((resolve, reject) => {
  const paramsArray = []
  let fullUrl = url // 拼接url
  if (params) {
    // 拼接参数
    Object.keys(params).forEach(key => paramsArray.push(`${key}=${params[key]}`))
    if (fullUrl.search(/\?/) === -1) {
      fullUrl += `?${paramsArray.join('&')}`
    } else {
      fullUrl += `&${paramsArray.join('&')}`
    }
  }

  fetch(fullUrl, {
    body: JSON.stringify(params),
    credentials: 'include',
    headers: {
      'X-Application-name': 'app',
      'Content-Type': 'application/json;',
      Authorization: `Basic enRlc2E6enRlc2E=`,
    },
    method: 'POST',
  })
    .then(e => e.json())
    .then((e) => {
      // 如果有value说明正常获取了token
      if (e.access_token) {
        cookie.save('tokenType', e.token_type, { domain: domain })
        cookie.save('token', e.access_token, { domain: domain })
        resolve({ code: 200, data: e.access_token })
      } else {
        resolve({ code: 400, msg: e.message || e.msg })
      }
    })
    .catch((e) => {
      reject(e)
    })
})
