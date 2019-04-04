import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-compose',
    templateUrl: './compose.component.html'
})
export class ComposeComponent implements OnInit {

    constructor(private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Compose email - Administrator');
    }

}
