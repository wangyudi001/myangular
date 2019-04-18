import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { NzModalService } from 'ng-zorro-antd';
import { UserService } from './../services/user.service';
import { NzMessageService } from 'ng-zorro-antd';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private modal: NzModalService,
        private userService: UserService,
        private message: NzMessageService,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = '';
        let needAuth = true;

        if (req.url.indexOf('login') !== -1 && req.method.toUpperCase() === 'post'.toUpperCase()) {
            needAuth = false;
        }

        if (needAuth) {
            if (JSON.parse(sessionStorage.getItem('token'))) {
                token = JSON.parse(sessionStorage.getItem('token'));
                let authReq;
                authReq = req.clone({ headers: req.headers.set('token', token) });
                return next.handle(authReq).pipe(
                    mergeMap((event: any) => {
                        if (event instanceof HttpResponse && event.status !== 200) {
                            return ErrorObservable.create(event);
                        }

                        // 登录信息错误，清空登录信息，跳转登录页面
                        if (event instanceof HttpResponse && event.status === 500) {
                            this.router.navigate(['./login']);
                        }

                        return new Observable<HttpEvent<any>>(observer => observer.next(event));
                    }),

                );
            }
        } else {
            return next.handle(req);
        }
    }
}
