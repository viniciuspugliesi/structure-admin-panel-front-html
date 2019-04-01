import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    sendForgotPasswordForm() {
        this.router.navigate(['/login']).then();
    }
}
