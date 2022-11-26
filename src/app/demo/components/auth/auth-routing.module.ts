import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
        // { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
        { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
        { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
        { path: 'forgotpassword', loadChildren: () => import('./forgotpassword/forgotpassword.module').then(m => m.ForgotPasswordModule) },
        { path: 'otpverification', loadChildren: () => import('./otpverification/otpverification.module').then(m => m.OtpVerificationModule) },
        { path: 'setnewpassword', loadChildren: () => import('./setnewpassword/setnewpassword.module').then(m => m.SetNewPasswordModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
