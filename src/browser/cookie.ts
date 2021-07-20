/*
 * @Author: 易鑫
 * @Date: 2021-01-27 16:05:03
 * @LastEditTime: 2021-04-16 16:26:30
 * @Description: 操作cookie
 */
const set = (name = '', value: any, time = 0): void => {
    const exp = new Date();
    exp.setTime(exp.getTime() + time * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toUTCString();
};

const get = (name:string): string => {
    let arr;
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    if (arr = document.cookie.match(reg)) return unescape(arr[2]);
    return '';
};

const remove = (name: string): void => {
    document.cookie = encodeURIComponent(name)+'=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
};

const CookieHelper = Object.freeze({
    set,
    get,
    remove,
});
export default CookieHelper;