import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login/login.routing.module';
import { AuthInterceptor } from './interceptor/auth.interceptor';


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LeftComponent,
    RightComponent,
    LoginComponent
  ],
  exports: [
    AppComponent,
    UserComponent,
    LeftComponent,
    RightComponent,
    LoginComponent
],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginRoutingModule,
  ],
  providers: [
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
