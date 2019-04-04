import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-inbox',
    templateUrl: './inbox.component.html'
})
export class InboxComponent implements OnInit {

    constructor(private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Inbox email - Administrator');
    }

}
