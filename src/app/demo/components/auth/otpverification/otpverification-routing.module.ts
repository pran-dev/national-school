import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OtpVerificationComponent } from './otpverification.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: OtpVerificationComponent }
    ])],
    exports: [RouterModule]
})
export class OtpVerificationRoutingModule { }
