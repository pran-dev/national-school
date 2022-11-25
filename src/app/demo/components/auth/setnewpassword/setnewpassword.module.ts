import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetNewPasswordRoutingModule } from './setnewpassword-routing.module';
import { SetNewPasswordComponent } from './setnewpassword.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from "primeng/divider";

@NgModule({
    imports: [
        CommonModule,
        SetNewPasswordRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        DividerModule
    ],
    declarations: [SetNewPasswordComponent]
})
export class SetNewPasswordModule { }
