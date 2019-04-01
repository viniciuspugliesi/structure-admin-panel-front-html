import {Component, OnInit} from '@angular/core';
import {User} from '../../../shared/domain/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    public user: User = new User();

    constructor() {
    }

    ngOnInit() {
    }

    sendLogin() {
        console.log(this.user);
    }
}
