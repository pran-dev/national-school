import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SetNewPasswordComponent } from './setnewpassword.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SetNewPasswordComponent }
    ])],
    exports: [RouterModule]
})
export class SetNewPasswordRoutingModule { }
