import { CommonService } from './../../services/common.services';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  constructor(
      private comService: CommonService,
  ) { }

  userNick: string;

  ngOnInit() {
    this.userNick = this.comService.getCookie('loginInfo');
  }

}
