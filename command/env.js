const ENV = process.env.NODE_ENV;
let env = false; let domain = ''; let domainLogin = '',domainApp = '';
// // let h5Url="http://www.nongqibang.com:7004"
// let h5Url = 'http://ztesa.com.cn:7009';
// let h5UrlHign = 'http://ztesa.com.cn:7005/#/home?code=13110101199003071313A01030403B001T20190315C89C4E';
// if (ENV === 'development') {
//   // domain=window.location.hostname;
//   // domain = 'ztesa.com.cn'
//   domainLogin = '';
//   domain = '';
//   domainApp = 'nongqibang.com';
//   env = true;
//   // domainLogin = '/#/login'
//   h5Url = 'http://supe.nongqibang.com:7009';
// } else {
//   const indexDomin = window.location.hostname.indexOf('nongqibang.com');
//   const indexDominLocal = window.location.hostname.indexOf('localhost');
//   const isZTESA = (indexDomin > -1) || (indexDominLocal > -1)
//   // domain='ztesa.com.cn',  //   cookie主域名  百度服务器的域名
//   domain = indexDomin > -1 ? 'nongqibang.com' : 'ztesa.com.cn'; //   cookie主域名  113服务器的域名
//   domainApp = indexDomin > -1 ? 'nongqibang.com' : 'ztesa.com.cn';
//   // domain = 'nongbaxian.com.cn' // 农企帮演示
//   h5Url = indexDomin > -1 ? 'http://supe.nongqibang.com:7009' : 'http://ztesa.com.cn:7009';
//   domainLogin = indexDomin > -1 ? 'http://supe.nongqibang.com:7001/#/login' : 'http://ztesa.com.cn';
//   h5UrlHign = isZTESA > -1 ? 'http://192.167.5.113:7005/#/home?code=12000330225NA000276XA01030399B001T2019031557F9AD'
//     : 'http://ztesa.com.cn:7005/#/home?code=13110101199003071313A01030403B001T20190315C89C4E';
//   env = false;
// }

export {
  env, domain,
};
