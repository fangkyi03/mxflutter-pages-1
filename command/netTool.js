import cookie from 'react-cookies';

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


export const GET = (host, url, params = {}, appName = "supe") => new Promise(resolve => {
  fetch(host + url, {
    credentials: "include",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${cookie.load(
        "tokenType"
      )} ${cookie.load("token")}`,
      "X-Application-name": 'supe'
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