import cookie from 'react-cookies';
import apiTool from './apiTool';

export const POST = (host, url, params = {}, appName = "app") => new Promise(resolve => {
  fetch(host + url, {
    credentials: "include",
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
      Authorization: `${cookie.load(
        "tokenType"
      )} ${cookie.load("token")}`,
      "X-Application-name": appName
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


export const GET = (host, url, params = {}, appName = "app") => new Promise(resolve => {
  fetch(host + url, {
    credentials: "include",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${cookie.load(
        "tokenType"
      )} ${cookie.load("token")}`,
      "X-Application-name": appName
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

export const Login = (host, url, params = {}, token) => new Promise((resolve, reject) => {
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
      const domain = apiTool.isDev()
      if (e.value) {
        console.log('登录', e, domain)
        cookie.save('tokenType', e.tokenType, { path: '/' })
        cookie.save('token', e.value, { path: '/' })
        resolve({ code: 200, data: e.value });
      } else {
        resolve({ code: 400, msg: e.message || e.msg });
      }
    })
    .catch(e => {
      resolve({ code: 400, msg: e.message || e.msg });
    });
});

export const GetWeather = (host, url, params = {}, appName = "supe") => new Promise(resolve => {
  fetch(url, {
    credentials: "include",
    method: "GET",
  })
    .then(e => e.json())
    .then(e => {
      if (e.status == '1') {
        resolve({ code: 200, data: e })
      } else {
        resolve(e);
      }
    })
    .catch(e => {
      resolve(e);
    });
}
);