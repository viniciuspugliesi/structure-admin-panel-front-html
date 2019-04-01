import {Component, OnInit} from '@angular/core';
import {CoreService} from '../../../core.service';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html'
})
export class LoaderComponent implements OnInit {

    constructor(public coreService: CoreService) {
    }

    ngOnInit() {
    }
}
