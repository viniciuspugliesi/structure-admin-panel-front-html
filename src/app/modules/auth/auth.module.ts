import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routing} from './auth-routing.module';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {RegisterComponent} from './register/register.component';
import {UnverifiedComponent} from './unverified/unverified.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {HelpersListComponent} from './components/helpers-list/helpers-list.component';

@NgModule({
    imports: [
        routing,
        CommonModule,
        FormsModule,
    ],
    declarations: [
        LoginComponent,
        ForgotPasswordComponent,
        RegisterComponent,
        UnverifiedComponent,
        ResetPasswordComponent,
        HelpersListComponent
    ]
})
export class AuthModule {
}
