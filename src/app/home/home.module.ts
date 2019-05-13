import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UserService } from '../services/user.service';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { HeaderComponent } from './header/header.component';
import { SiderComponent } from './sider/sider.component';
import { AaaComponent } from './aaa/aaa.component';
import { LeftComponent } from '../left/left.component';


@NgModule({
    declarations: [
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        SiderComponent,
        AaaComponent,
        LeftComponent
    ],
    exports: [
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        SiderComponent,
        AaaComponent,
        LeftComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule,
        HomeRoutingModule,
    ],
    providers: [
        UserService,
    ]
})

export class HomeModule {

}
