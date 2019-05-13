import { UserComponent } from './../user/user.component';
import { LoginRoutingModule } from './login.routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UserService } from '../services/user.service';
import { LoginComponent } from './login.component';


@NgModule({
    declarations: [
        LoginComponent,
        UserComponent
    ],
    exports: [
        LoginComponent,
        UserComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule,
        LoginRoutingModule,
    ],
    providers: [
        UserService,
        LoginComponent,
        UserComponent
    ]
})

export class LoginModule {

}
