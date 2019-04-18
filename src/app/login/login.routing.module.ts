import { RightComponent } from './../right/right.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: 'right',
            component: RightComponent,
        },
    ])]
})

export class LoginRoutingModule {

}
