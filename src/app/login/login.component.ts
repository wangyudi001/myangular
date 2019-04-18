import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { NzMessageService } from 'ng-zorro-antd';
import { registerNgModuleType } from '@angular/core/src/linker/ng_module_factory_loader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  loginInfo: {
    username: string,
    password: string
  };

  userInfo: {
    id: string,
    username: string,
    password: string,
    email: string,
    phone: string
  };

  constructor(
    private message: NzMessageService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {

    if (JSON.parse(sessionStorage.getItem('loginInfo'))) {
      this.loginInfo = JSON.parse(sessionStorage.getItem('loginInfo'));
    } else {
      this.loginInfo = {
        username: '',
        password: '',
      };
    }

    this.userInfo = {
      id: '',
      username: '',
      password: '',
      email: '',
      phone: ''
    };
  }

  login() {
    this.isLoading = true;
    if (this.loginInfo.username === '' || this.loginInfo.password === '') {
      this.message.error('username and password can not be empty');
      this.isLoading = false;
      return;
    }

    const params = {
      userId: '1',
      userName: this.loginInfo.username,
      userPassword: this.loginInfo.password,
    };

    this.userService.loginUser(params)
      .subscribe((result) => {
        if (result.code !== '0') {
          this.message.error(result.attr);
          this.isLoading = false;
          return;
        } else {
          const token = result.token;
          sessionStorage.setItem('token', JSON.stringify(token));
          this.router.navigate(['./left']);
          this.isLoading = false;
        }
      }, () => {
        this.isLoading = false;
        this.message.error('serve error!');
        return;
      });
  }
}
