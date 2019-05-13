import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'app-sider',
    templateUrl: './sider.component.html',
})
export class SiderComponent implements OnInit {

    openMap: { [name: string]: boolean } = {
        sub1: true,
        sub2: false,
        sub3: false
    };
    constructor() { }

    ngOnInit() {

    }

    openHandler(value: string): void {
        for (const key in this.openMap) {
            if (key !== value) {
                this.openMap[key] = false;
            }
        }
    }
}
