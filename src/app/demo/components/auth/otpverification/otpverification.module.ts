import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpVerificationRoutingModule } from './otpverification-routing.module';
import { OtpVerificationComponent } from './otpverification.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from "primeng/divider";

@NgModule({
    imports: [
        CommonModule,
        OtpVerificationRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        DividerModule
    ],
    declarations: [OtpVerificationComponent]
})
export class OtpVerificationModule { }
