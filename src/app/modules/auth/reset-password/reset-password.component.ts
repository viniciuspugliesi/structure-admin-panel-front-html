import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    sendForgotPasswordForm() {
        this.router.navigate(['/dashboard']).then();
    }
}
