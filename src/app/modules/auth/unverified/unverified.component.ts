import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-unverified',
    templateUrl: './unverified.component.html'
})
export class UnverifiedComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    sendFormUnverified() {
        this.router.navigate(['/dashboard']).then();
    }
}
