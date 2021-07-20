/* eslint-disable no-console */
/*
 * @Descripttion: 深比较函数。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-04-29 14:20:14
 */
import getType from '../helper/getType';
declare const process: any;

let IS_PROD = true;

if (typeof window === 'undefined') {
    IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
}

export default function isObjDeepEqual(obj1: any, obj2: any, skipFunc = false, log = false): boolean {
    const type1: string = getType(obj1);
    const type2: string = getType(obj2);

    if (type1 !== type2) {
        if (!IS_PROD && log) console.warn('The type of own is unequal', obj1, obj2, type1, type2);
        return false;
    }

    if (type1 === 'object') {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) {
            if (!IS_PROD && log) console.warn('The length of own property is unequal', obj1, obj2, keys1, keys2);
            return false;
        }

        return keys1.every(key => isObjDeepEqual(obj1[key], obj2[key], skipFunc, log));
    } else if (type1 === 'array') {
        if (obj1.length !== obj2.length) {
            if (!IS_PROD && log) console.warn('The length of own is unequal', obj1, obj2, obj1.length, obj2.length);
            return false; // when length doesn't equal
        }

        return obj1.every((item: any, index: number) => isObjDeepEqual(item, obj2[index], skipFunc, log));
    } else if (type1 === 'function') {
        const flag: boolean = skipFunc || obj1.toString() === obj2.toString();

        if (!flag && !IS_PROD && log)
            console.warn('The value of function is unequal', obj1.toString(), obj2.toString());
        return flag;
    } else if (type1 === 'symbol') {
        const flag: boolean = obj1.toString() === obj2.toString();

        if (!flag && !IS_PROD && log)
            console.warn('The value of function is unequal', obj1.toString(), obj2.toString());
        return flag;
    } else if (type1 === 'date') {
        const flag: boolean = obj1.getTime() === obj2.getTime();

        if (!flag && !IS_PROD && log)
            console.warn('The value of function is unequal', obj1, obj2, obj1.getTime(), obj2.getTime());
        return flag;
    }

    const flag: boolean = obj1 === obj2;

    if (!flag && !IS_PROD && log) console.warn('The value of own is unequal', obj1, obj2);
    // Boolean, Date, Number, String etc...
    return flag;
}