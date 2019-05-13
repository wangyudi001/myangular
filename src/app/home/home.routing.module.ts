import { LeftComponent } from './../left/left.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AaaComponent } from './aaa/aaa.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: HomeComponent,
            children: [
                {
                    path: 'aaa',
                    component: AaaComponent,
                },
                {
                    path: 'left',
                    component: LeftComponent,
                }
            ]
        },
    ])],

    exports: [
        RouterModule,
    ],
})

export class HomeRoutingModule {

}
