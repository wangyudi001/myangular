import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class UserService {

    constructor(
        private http: HttpClient,
    ) { }

    // 登录
    loginUser(params) {
        return this.http.post<any>('http://localhost:8080/login', params).pipe(catchError(this.handleError));
    }

    // 用户列表
    getAllUsers() {
        return this.http.get<any>('http://localhost:8080/all').pipe(catchError(this.handleError));
    }

    // 根据用户名获取用户
    getUserByUsername(urlOption) {
        return this.http.get<any>('http://localhost:8080/getUserByUsername' + urlOption).pipe(catchError(this.handleError));
    }

    // 根据id删除用户信息
    delUserById(urlOption) {
        return this.http.delete<any>('http://localhost:8080/del' + urlOption).pipe(catchError(this.handleError));
    }

    // 根据id修改用户信息
    updUserById(urlOption, params) {
        return this.http.post<any>('http://localhost:8080/upd' + urlOption, params).pipe(catchError(this.handleError));
    }

    // 新增用户
    addUser(params) {
        return this.http.post<any>('http://localhost:8080/add', params).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    }
}
