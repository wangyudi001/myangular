import { LoginComponent } from './login.component';
import { UserComponent } from './../user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: LoginComponent,
        },
        {
            path: 'user',
            component: UserComponent,
        }

    ])],

    exports: [
        RouterModule,
    ],
})

export class LoginRoutingModule {

}
