import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

    constructor(
    ) { }

    // 设置cookie
    setCookie(key, value, days) {
        // safari cookie不支持中文
        const valueString = encodeURIComponent(value);
        const exp = new Date();
        exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = key + '=' + valueString + ';expires=' + exp + ';Path=/';
    }

    // 读取cookie
    getCookie(key) {
        const reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
        const arr = document.cookie.match(reg);
        if (arr) {
            return decodeURIComponent(arr[2]);
        } else {
            return '';
        }
    }
}
