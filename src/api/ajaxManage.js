import axios from "axios";
import qs from "qs";
// 添加请求拦截器

axios.interceptors.response.use(
  response => {
    return response;
  },
  err => err
);

// post
export function postAction(url, parameter) {
  return axios({
    url: url,
    method: "post",
    data: parameter
  });
}

// post method= {post | put}
export function httpAction(url, parameter, method) {
  return axios({
    url: url,
    method: method,
    data: parameter
  });
}

// put
export function putAction(url, parameter) {
  return axios({
    url: url,
    method: "put",
    data: parameter
  });
}

// get
export function getAction(url, parameter) {
  let params = qs.stringify(parameter);
  return axios({
    url: url + `?${params}`,
    method: "get"
  });
  // return axios({
  //   url: url,
  //   method: "get",
  //   params: parameter
  // });
}

// deleteAction
export function deleteAction(url, parameter) {
  return axios({
    url: url,
    method: "delete",
    params: parameter
  });
}

/**
 * 下载文件 用于excel导出
 * @param url
 * @param parameter
 * @returns {*}
 */
export function downFile(url, parameter, name) {
  axios({
    url: url,
    params: parameter,
    method: "get",
    responseType: "blob"
  }).then(res => {
    var oa = document.createElement("a");
    oa.href = URL.createObjectURL(new Blob([res["data"]]));
    oa.download = name;
    document.body.appendChild(oa);
    oa.click();
  });
}
