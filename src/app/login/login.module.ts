import { LoginRoutingModule } from './login.routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UserService } from '../services/user.service';
import { RightComponent } from '../right/right.component';


@NgModule({
    declarations: [
        RightComponent
    ],
    exports: [
        RightComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule,
        LoginRoutingModule,
    ],
    providers: [
        UserService
    ]
})

export class ClinicModule {

}
