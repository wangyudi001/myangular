import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  constructor(
    private userService: UserService,
    private message: NzMessageService
  ) { }

  userList: {
    code: string,
    message: string,
    data: any[],
  };

  selectUser: {
    id: string,
    username: string,
    password: string,
    email: string,
    phone: string
  };

  IsEdit = false;

  ngOnInit() {
    this.userList = {
      code: '',
      message: '',
      data: []
    };

    this.selectUser = {
      id: '',
      username: '',
      password: '',
      email: '',
      phone: ''
    };

    this.getData();
  }

  getData() {
    this.userService.getAllUsers().subscribe(
      (result) => {
        if (result.code != '0') {
          this.message.error(result.attr);
          return;
        } else {
          this.userList = {
            code: result.code,
            message: result.message,
            data: result.data
          };
        }

      }, () => {
        this.message.error('serve error!');
        return;
      }
    );
  }

  del(user) {
    const param = user.userId;
    this.userService.delUserById('?id=' + param).subscribe(
      (result) => {
        if (result.code != '0') {
          this.message.error(result.attr);
          return;
        } else {
          this.message.error('删除成功');
          this.getData();
        }
      }, () => {
        this.message.error('serve error!');
        return;
      }
    );
  }

  upd(user) {
    this.selectUser = {
      id: user.userId,
      username: user.userName,
      password: user.userPassword,
      email: user.userEmail,
      phone: user.phone
    };
    this.IsEdit = true;
  }

  add() {
    this.selectUser = {
      id: '',
      username: '',
      password: '',
      email: '',
      phone: ''
    };
    this.IsEdit = true;
  }

  commit() {
    const params = {
      userName: this.selectUser.username,
      userPassword: this.selectUser.password,
      userEmail: this.selectUser.username,
      phone: this.selectUser.phone,
    };

    if (this.selectUser.id != null && this.selectUser.id != '') {
      const urlOption = '/' + this.selectUser.id;
      this.userService.updUserById(urlOption, params).subscribe((data) => {
        if (data.code != '0') {
          this.IsEdit = false;
          this.message.error(data.message);
        } else {
          this.message.success('修改成功');
          this.getData();
          this.IsEdit = false;
        }
      }, () => {
        this.IsEdit = false;
        this.message.error('serve error!');
      });
    } else {
      this.userService.addUser(params).subscribe((data) => {
        if (data.code != '0') {
          this.IsEdit = false;
          this.message.error(data.message);
        } else {
          this.message.success('新增成功');
          this.getData();
          this.IsEdit = false;
        }
      }, () => {
        this.IsEdit = false;
        this.message.error('serve error!');
      });
    }
  }

  cancel() {
    this.selectUser = {
      id: '',
      username: '',
      password: '',
      email: '',
      phone: ''
    };
    this.IsEdit = false;
  }

}
