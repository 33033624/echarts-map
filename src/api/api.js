import * as Api from "./ajaxManage";

// 获取辽宁省内地图
export const getLiaoningJson = () => Api.getAction("/static/liaoning.json");

// 获取辽宁省内地图
export const getLiaoningDsJson = id => Api.getAction(`/static/${id}.json`);
