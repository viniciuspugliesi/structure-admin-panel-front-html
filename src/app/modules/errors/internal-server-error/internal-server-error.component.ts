import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-internal-server-error',
    templateUrl: './internal-server-error.component.html'
})
export class InternalServerErrorComponent implements OnInit {

    constructor(private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Internal server error - Administrator');
    }

}
